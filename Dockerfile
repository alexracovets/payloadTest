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

# Збираємо проект
RUN npm run build

# Створюємо директорію для збереження збірки
RUN mkdir -p /app/.next

# Запускаємо проект
CMD ["npm", "run", "start"]