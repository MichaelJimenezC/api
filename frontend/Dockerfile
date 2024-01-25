# Usa la imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia el resto del código fuente al directorio de trabajo
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que se ejecutará tu aplicación
EXPOSE 80

# Comando para iniciar el servidor web (por ejemplo, serve)
CMD ["npx", "serve", "-s", "build", "-l", "80"]
