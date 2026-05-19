# ─────────────────────────────────────────
# Stage 1 : dépendances
# ─────────────────────────────────────────
FROM node:20-alpine AS deps

# Nécessaire pour certains packages natifs (ex: sharp)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copier uniquement les fichiers de dépendances d'abord
# (optimise le cache Docker : rebuild seulement si package.json change)
COPY package.json package-lock.json* ./

RUN npm ci --frozen-lockfile

# ─────────────────────────────────────────
# Stage 2 : build
# ─────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Récupérer les node_modules du stage précédent
COPY --from=deps /app/node_modules ./node_modules

# Copier tout le code source
COPY . .

# Désactiver la télémétrie Next.js pendant le build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ─────────────────────────────────────────
# Stage 3 : runner (image finale légère)
# ─────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copier uniquement ce qui est nécessaire pour tourner
COPY --from=builder /app/public ./public

# Next.js génère un dossier .next/standalone en mode output: 'standalone'
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Basculer sur l'utilisateur non-root
USER nextjs

# Cloud Run utilise le port 8080 par défaut
EXPOSE 8080
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Démarrer avec le serveur standalone de Next.js
CMD ["node", "server.js"]