FROM node:18-alpine

# Cria diretório e define como diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de dependência
COPY package*.json ./

# Instala apenas as dependências
RUN npm install 

# Copia o restante do código
COPY . .

# Expõe a porta usada pela app (ajuste se for diferente)
EXPOSE 5173

# Comando padrão para iniciar a aplicação
CMD ["npm", "run", "dev"]