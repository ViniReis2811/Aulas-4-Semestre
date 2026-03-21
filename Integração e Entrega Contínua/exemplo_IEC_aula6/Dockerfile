FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Copia e garante permissão ao script
COPY wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it

EXPOSE 3000

CMD ["npm", "start"]
