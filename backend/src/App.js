const express = require("express");
const app = express();

// Importação das Rotas da pasta routes
const Dummydata = require ('./routes/DummyDataRoute');
const TipodePropostaRouters = require ('./routes/TipodepropostaRoute');
const ProdutoRouters = require ('./routes/ProdutosRoute')
const AdminRouters = require ('./routes/AdminRoute');
const CompradorRouters = require ('./routes/CompradorRoute');
const ResponsavelRouters = require ('./routes/ResponsaveisRoute')
const PropostaRouters = require ('./routes/PropostaRoute');

// Configuração do CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept, Access-Control-Allow-Request-Method"
  );

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Configuração da Porta de Inicio
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Rotas
app.use('/dummydata', Dummydata);
app.use('/tipodeproposta', TipodePropostaRouters);
app.use('/produto', ProdutoRouters);
app.use('/admin', AdminRouters);
app.use('/comprador', CompradorRouters);
app.use('/responsaveis', ResponsavelRouters);
app.use('/proposta', PropostaRouters);


// Inicio do Servidor na Porta definida na Configuração
app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
