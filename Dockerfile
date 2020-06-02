FROM node
LABEL name="vue-node"
LABEL version ="1.1"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm start