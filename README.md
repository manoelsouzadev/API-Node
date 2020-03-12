# API Node de Produtos
API NodeJS desenvolvida para aprendizado da tecnologia, com base no curso do balta.io

**Para rodar a API, siga os passos abaixo:**

1.**Crie um arquivo** chamado **config.js** na **raíz do projeto**, e dentro do arquivo, **coloque o seguinte código**:
~~~javascript
global.SALT_KEY = 'f5b96262-5604-4cd3-95f2-05e78e5761ef'; // exemplo
global.EMAIL_TMPL = 'Olá, <strong> {0}</strong>, seja bem vindo à Node Store!';

module.exports = {
  connectionString: 'MONGO CONNECTION STRING',
  sendgridKey: 'SENDGRID CONNECTION STRING',
  containerConnectionString: 'AZURE CONNECTION STRING'
};
 
//Para ter uma Connection String Mongo é necessário ter um banco de dados executado localmente ou remoto. 
//Para as plataformas Sendgrid e Azure é necessário possuir conta em ambas as plataformas.
~~~
2. Rode esta aplicação com o comando **node app.js** ou **npm start**

**Tecnologias utilizadas:**
* NodeJS
* Express
* MongoDB
* Storage of Microsoft Azure
