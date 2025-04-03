# Використовуємо офіційний образ Node.js
FROM node:22-alpine AS base

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо файли package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm ci

# Копіюємо решту файлів проекту
COPY . .

# Відкриваємо порт
EXPOSE 3000

# Запускаємо проект
CMD ["npm", "run", "dev"]