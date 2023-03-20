# Define a imagem base do Docker
FROM node:latest

# Crie o diretório de trabalho do aplicativo dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências do aplicativo
RUN yarn

# Copie todo o código do aplicativo para o diretório de trabalho
COPY . .

# Defina a porta que será exposta pelo contêiner
EXPOSE 3000

# Inicie o aplicativo
CMD [ "node", "--watch", "app/index.js" ]
