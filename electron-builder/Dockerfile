FROM node:18-bullseye

RUN apt-get update && apt-get install -y \
    rpm \
    && apt-get clean

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./build_electron_app.sh

CMD ["bash"]
