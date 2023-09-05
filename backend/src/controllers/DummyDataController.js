var sequelize = require("../config/database");
var Proposta = require("../models/PropostaModel");
var TipodeProposta = require("../models/TipodepropostaModel");
var Produto = require("../models/ProdutosModel");
var Admin = require("../models/AdminModel");
var Comprador = require("../models/CompradorModel");
var Responsavel = require("../models/ResponsaveisModel");
const controllers = {};
sequelize.sync();

controllers.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function () {
      console.log("Introdução dos Dados nas Tabelas");

      // Criar Tipos na Tabela Tipo de Proposta
      TipodeProposta.create({
        nome: "Venda de Produto",
      });
      TipodeProposta.create({
        nome: "Devolução",
      });
      TipodeProposta.create({
        nome: "Reembolso",
      });

      // Criar Produtos na Tabela Produtos
      Produto.create({
        nome: "Energia Eletrica",
        quantidade: 4,
        valorunitario: "1.50",
        inflacao: "2.8",
        valortotal: "10.8",
      });
      Produto.create({
        nome: "Energia Eletrica",
        quantidade: 10,
        valorunitario: "1.50",
        inflacao: "1.8",
        valortotal: "18.0",
      });
      Produto.create({
        nome: "Energia Eletrica",
        quantidade: 15,
        valorunitario: "1.50",
        inflacao: "2.0",
        valortotal: "45.0",
      });
      Produto.create({
        nome: "Energia Eletrica",
        quantidade: 35,
        valorunitario: "1.50",
        inflacao: "1.1",
        valortotal: "74.25",
      });

      // Criar Admins na Tabela Admins
      Admin.create({
        nomeinicial: "Ruben",
        nomefinal: "Gomes",
        email: "rubengomes@gmail.com",
        password: "password123",
      });
      Admin.create({
        nomeinicial: "Marco",
        nomefinal: "Rocha",
        email: "marcorocha@gmail.com",
        password: "password123",
      });
      Admin.create({
        nomeinicial: "Iago",
        nomefinal: "Goncalves",
        email: "iagogoncalves@gmail.com",
        password: "password123",
      });
      Admin.create({
        nomeinicial: "Joao",
        nomefinal: "Pereira",
        email: "joaopereira@gmail.com",
        password: "password123",
      });
      Admin.create({
        nomeinicial: "Joao",
        nomefinal: "Nunes",
        email: "joaonunes@gmail.com",
        password: "password123",
      });
      Admin.create({
        nomeinicial: "Joao",
        nomefinal: "Almeida",
        email: "joaoalmeida@gmail.com",
        password: "password123",
      });

      // Criar Comprador na Tabela Comprador
      Comprador.create({
        nomeinicial: "Joao",
        nomefinal: "Silva",
        email: "joao.silva@example.com",
        password: "senha123",
        endereco: "Rua Principal",
        detalhesendereco: "Bloco A",
        codigopostal: "12345-678",
        informacao: "Informações adicionais",
        cidade: "Cidade A",
        confirmacao: false,
        cartao_nome: "João Silva",
        cartao_numero: 123456789,
        cartao_data: "2023-06-23",
        cartao_CVV: 123,
      });
      Comprador.create({
        nomeinicial: "Maria",
        nomefinal: "Santos",
        email: "maria.santos@example.com",
        password: "senha456",
        endereco: "Avenida Secundária",
        detalhesendereco: "Apartamento 2B",
        codigopostal: "98765-432",
        informacao: "Detalhes importantes",
        cidade: "Cidade B",
        confirmacao: false,
        cartao_nome: "Maria Santos",
        cartao_numero: 987654321,
        cartao_data: "2023-06-24",
        cartao_CVV: 456,
      });
      Comprador.create({
        nomeinicial: "Pedro",
        nomefinal: "Gomes",
        email: "pedro.gomes@example.com",
        password: "senha789",
        endereco: "Praça Central",
        detalhesendereco: "Casa 10",
        codigopostal: "54321-876",
        informacao: "Outras informações",
        cidade: "Cidade C",
        confirmacao: false,
        cartao_nome: "Pedro Gomes",
        cartao_numero: 456123789,
        cartao_data: "2023-06-25",
        cartao_CVV: 789,
      });
      Comprador.create({
        nomeinicial: "Ana",
        nomefinal: "Ribeiro",
        email: "ana.ribeiro@example.com",
        password: "s3nhaforte",
        endereco: "Rua do Comércio",
        detalhesendereco: "Sala 20",
        codigopostal: "01234-567",
        informacao: "Informações adicionais do endereço",
        cidade: "Cidade D",
        confirmacao: false,
        cartao_nome: "Ana Ribeiro",
        cartao_numero: 987123654,
        cartao_data: "2023-06-26",
        cartao_CVV: 987,
      });
      // Criar Responsavel na Tabela Responsaveis
      Responsavel.create({
        nomeinicial: "Pedro",
        nomefinal: "Almeida",
        email: "pedro.almeida@example.com",
        password: "securepassword",
        endereco: "Rua das Flores",
        detalhesendereco: "Casa 11",
        codigopostal: "54321-789",
        informacao: "Informações adicionais do endereço",
        cidade: "Cidade C",
        confirmacao: false,
        cartao_nome: "Pedro Almeida",
        cartao_numero: 654321987,
        cartao_data: "2023-06-25",
        cartao_CVV: 789,
      });
      Responsavel.create({
        nomeinicial: "Carlos",
        nomefinal: "Fernandes",
        email: "carlos.fernandes@example.com",
        password: "p@ssw0rd",
        endereco: "Rua dos Sonhos",
        detalhesendereco: "Apartamento 5A",
        codigopostal: "54321-012",
        informacao: "Informações adicionais do endereço",
        cidade: "Cidade E",
        confirmacao: false,
        cartao_nome: "Carlos Fernandes",
        cartao_numero: 102345678,
        cartao_data: "2023-06-27",
        cartao_CVV: 246,
      });

      // Criar Propostas na Tabela Proposta
      Proposta.create({
        data: new Date(),
        detalhes: "Foi a proposta",
        documentossend: "documentos1",
        documentosreceived: "documentos2",
        vendido: false,
        produtoId: 1,
        tipodepropostaId: 1,
        adminId: 4,
        compradorId: 1,
        responsaveisId: 1,
      });
      Proposta.create({
        data: new Date(),
        detalhes: "Foi a proposta 323232",
        documentossend: "documentos3",
        documentosreceived: "documentos4",
        produtoId: 2,
        vendido: false,
        tipodepropostaId: 1,
        adminId: 1,
        compradorId: 1,
        responsaveisId: 2,
      });
      Proposta.create({
        data: new Date(),
        detalhes: "Foi a proposta 323232",
        documentossend: "documentos5",
        documentosreceived: "documentos6",
        produtoId: 3,
        vendido: false,
        tipodepropostaId: 1,
        adminId: 5,
        compradorId: 1,
        responsaveisId: 1,
      });
      Proposta.create({
        data: new Date(),
        detalhes: "Foi a proposta 323232",
        documentossend: "documentos7",
        documentosreceived: "documentos8",
        produtoId: 4,
        vendido: false,
        tipodepropostaId: 1,
        adminId: 6,
        compradorId: 1,
        responsaveisId: 2,
      });
      const data = Proposta.findAll();
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  res.json(response);
};
module.exports = controllers;
