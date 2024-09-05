FROM node:20-alpine

ARG VITE_API_URL

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

CMD ["npm", "run dev"]

FROM nginx:alpine

# Copy your custom Nginx configuration file to the container
COPY .nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx will listen on
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]