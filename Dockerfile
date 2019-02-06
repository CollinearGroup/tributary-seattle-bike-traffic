FROM node:10

# Create app directory
WORKDIR /app
COPY ./package.json /app

# Install app dependencies
RUN npm install
COPY . /app
EXPOSE 3000

CMD ["npm", "start"]
