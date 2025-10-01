FROM node:20-alpine
WORKDIR /app
COPY ./package.json ./packagejson
COPY  ./package-lock.json ./package-lock.json
RUN npm install
COPY . .
ENV DATABASE_URL="postgresql://postgres:mysecretpassword@db:5432/postgres?schema=public"
RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
