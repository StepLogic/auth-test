FROM node:16.18-alpine3.15 As development
WORKDIR /backend

COPY package*.json ./
RUN npm install --only=development
COPY . .
EXPOSE 8000:8000
RUN npm run build
CMD [ "npm","run", "start:dev" ]
