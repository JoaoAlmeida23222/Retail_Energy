var PropostaModel = require("../models/PropostaModel");
var ProdutoModel = require("../models/ProdutosModel");
var ResponsavelModel = require("../models/ResponsaveisModel");
var CompradorModel = require("../models/CompradorModel");
var sequelize = require("../config/database");

const controllers = {};
//sequelize.sync();

// Metodos do Controlador Proposta
// Comandos Simples
// Comando para ir buscar todas as Propostas
controllers.GetAllPropostas = async (req, res, next) => {
  try {
    const data = await PropostaModel.findAll({
      include: [
        { model: ProdutoModel },
        { model: ResponsavelModel },
        { model: CompradorModel },
      ],
    });
    res.send({ success: true, data: data });
  } catch (error) {
    next(error);
  }
};

// Comando para criar as Propostas
controllers.createProposta = async (req, res, next) => {
  console.log(req.body);
  try {
    const a = await sequelize.transaction();
    const Proposta = await ProdutoModel.create(
      {
        data: new Date(),
        detalhes: req.body.detalhes,
        documentossend: req.body.documentossend,
        documentosreceived: req.body.documentosreceived,
        vendida: req.body.vendida,
        produtoid: req.body.produtoid,
        tipodepropostaid: req.body.tipodepropostaid,
        adminid: req.body.adminid,
        compradorid: req.body.compradorid,
        responsaveisid: req.body.responsaveisid,
      },
      { transaction: a }
    );
    await a.commit();
    res.send({ success: true, data: Proposta });
  } catch (e) {
    await a.rollback();
    next(e);
  }
};

// Comando para dar update das Propostas
controllers.updatePropostas = async (req, res, next) => {
  try {
    const { idsearch } = req.params.id;
    //check if id is not a number
    if (isNaN(idsearch)) return createError.BadRequest("id is not a number");
    const { compradoridupdate } = req.body;
    const data = await Cliente.update(
      {
        compradorid: compradoridupdate,
      },
      {
        where: { id: idsearch },
      }
    );
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error);
  }
};

// Comando para apagar as Propostas
controllers.deleteProposta = async (req, res, next) => {
  try {
    const { idsearch } = req.params;
    //check if id is not a number
    if (isNaN(idsearch)) return createError.BadRequest("Id is not a number");
    const del = await proposta.destroy({
      where: { id: idsearch },
    });
    res.send({ success: true, deleted: del, message: "Delete successful" });
  } catch (error) {
    next(error);
  }
};

// Comandos Avançados
// Comando para ir buscar as 3 ultimas Propostas
controllers.GetLast3Propostas = async (req, res, next) => {
  try {
    const latestProposals = await PropostaModel.findAll({
      include: [
        { model: ProdutoModel },
        { model: ResponsavelModel },
        { model: CompradorModel },
      ],
      order: [["id", "DESC"]],
      limit: 3,
    });
    res.send({
      success: true,
      data: latestProposals,
      message: "Ultimas propostas carregadas",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocorreu um erro ao buscar as últimas propostas." });
  }
};

// Comando para criar o contador das Propostas Criadas
controllers.countPropostasCriadas = async (req, res) => {
  try {
    // Contar propostas criadas
    const count = await PropostaModel.count();

    res.json({ count });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocorreu um erro ao contar as propostas criadas." });
  }
};
// Comando para criar o contador das Propostas Vendidas
controllers.countPropostasVendidas = async (req, res) => {
  try {
    // Contar propostas vendidas
    const count = await PropostaModel.count({ where: { vendida: true } });

    res.json({ count });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocorreu um erro ao contar as propostas vendidas." });
  }
};
// Comando para criar as media dentro das tabelas
controllers.MediaPropostasVendidas = async (req, res) => {
  try {
    // Contar propostas criadas
    const countPropostasCriadas = await PropostaModel.count();

    // Contar propostas vendidas
    const countPropostasVendidas = await PropostaModel.count({
      where: { vendida: true },
    });

    // Calcular a média de propostas vendidas por criadas
    const mediaPropostasVendidasPorCriadas =
      countPropostasCriadas > 0
        ? countPropostasVendidas / countPropostasCriadas
        : 0;

    res.json({
      mediaPropostasVendidasPorCriadas,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Ocorreu um erro ao calcular a média de propostas vendidas.",
    });
  }
};

// Comando para vender propostas
controllers.sellPropostas = async (req, res) => {
  try {
    // Obter a lista de IDs das propostas a serem vendidas
    const propostasIds = req.body.id;

    // Verificar se há IDs de propostas fornecidas
    if (!propostasIds || propostasIds.length === 0) {
      return res
        .status(400)
        .json({ error: "IDs de propostas não fornecidos." });
    }

    // Atualizar o estado das propostas para "vendida"
    await proposta.update({ vendida: true }, { where: { id: propostasIds } });

    res.json({ success: true, message: "Propostas vendidas com sucesso." });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocorreu um erro ao vender as propostas." });
  }
};

module.exports = controllers;
