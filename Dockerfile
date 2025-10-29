# Etapa de build
FROM node:20-alpine AS build

WORKDIR /app

# Copiar dependencias primero (para cache de Docker)
COPY package.json yarn.lock ./

# Instalar dependencias
RUN yarn install --frozen-lockfile

# Copiar el resto del proyecto
COPY . .

# Compilar el proyecto NestJS
RUN yarn build

# Etapa final: imagen ligera para producción
FROM node:20-alpine AS production

WORKDIR /app

# Copiar solo lo necesario del build
COPY --from=build /app/package.json /app/yarn.lock ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Variable para Heroku (usa $PORT)
ENV NODE_ENV=production
EXPOSE 3000

# Comando de inicio (Heroku ejecuta automáticamente este CMD)
CMD ["node", "dist/main.js"]
