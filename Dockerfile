# Use the official image as a parent image.
FROM node:13-alpine as react-build

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install


# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

RUN npm run build

CMD [ "npm", "run", "start"]