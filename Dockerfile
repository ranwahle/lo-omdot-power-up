FROM node:12
WORKDIR /usr/data
COPY package*.json ./
RUN npm install
COPY . .
RUN npm build
EXPOSE 3001
CMD ["npm", "start"]
