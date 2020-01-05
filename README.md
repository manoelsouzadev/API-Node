# API Node de Produtos
API NodeJS desenvolvida para aprendizado da tecnologia, com base no curso do balta.io

**Siga os passos abaixo:**

1.Crie uma pasta chamada **config** na raíz do projeto, e dentro da pasta **config**,  crie um arquivo **db.js com o seguinte código abaixo:**
~~~javascript
if(process.env.NODE_ENV == "production"){
	module.exports = { URI de conexão com seu banco de dados NoSql }
}else{
  module.exports = { URI de conexão com seu banco de dados NoSql }
}
//Para ter uma URI é necessário ter um banco NoSql rodando localmente ou on-line
~~~
2. Rode esta aplicação com o comando **node app.js** ou **npm start**
