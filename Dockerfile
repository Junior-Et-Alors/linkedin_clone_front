# pull official base image
FROM node:latest
WORKDIR /app
COPY package.json /app
RUN yarn install
RUN yarn add react-scripts
COPY . /app
EXPOSE 3000
CMD ["yarn","start"]
