var ResponsavelModel = require ('../models/ResponsaveisModel');
const sequelize = require("../config/database");

const controllers = {}
//sequelize.sync();

// Metodos do Controlador Comprador
// Comandos Simples
// Comando para ir buscar todos os Responsaveis
controllers.GetAllResponsaveis = async (req,res, next) =>{
    try {
      const data = await ResponsavelModel.findAll();
      res.send({ success: true, data: data });
    } catch (error) {
      next(error);
    }
}

// Comando de criar Responsaveis
controllers.createResponsavel = async (req, res, next) => {
  console.log(req.body);
  try {
    const a = await sequelize.transaction();
    const Responsavel = await ResponsavelModel.create(
      {
        nomeinicial: req.body.nomeinicial,
        nomefinal: req.body.nomefinal,
        email: req.body.email,
        password: req.body.password,
        endereco: req.body.endereco,
        detalhesendereco: req.body.enderecodetalhes,
        codigopostal: req.body.codigopostal,
        informacao: req.body.informacao,
        cidade: req.body.cidade,
        cartao_nome: req.body.cartaonome,
        cartao_numero: req.body.cartaonumero,
        cartao_data: req.body.cartaodata,
        cartao_cvv: req.body.cartaocvv,
      },
      { transaction: a }
    );
    await a.commit();
    res.send({ success: true, data: Responsavel });
  } catch (e) {
    await a.rollback();
    next(e);
  }
};

// Comando para fazer login com os Responsaveis
controllers.loginResponsavel = async (req, res, next) => {
  try {
    const Responsavel = await ResponsavelModel.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.send({ success: true, data: Responsavel });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

// Comando para fazer Update com os Responsaveis
controllers.updateResponsaveis = async (req, res, next) => {
  try {
    const { idsearch } = req.params;
    //check if id is not a number
    if (isNaN(idsearch)) return createError.BadRequest("id is not a number")

    const {nomeinicialupdate, nomefinalupdate, emailupdate, passwordupdate, enderecoupdate, enderecodetalhesupdate, codigopostalupdate, informacaoupdate, cidadeupdate, cartaonomeupdate, cartaonumeroupdate, cartaodataupdate, cartaocvvupdate  } = req.body;
    const data = await ResponsavelModel.update({
        nomeinicial: nomeinicialupdate,
        nomefinal: nomefinalupdate,
        email: emailupdate,
        password: passwordupdate,
        endereco: enderecoupdate,
        detalhesendereco: enderecodetalhesupdate,
        codigopostal: codigopostalupdate,
        informacao: informacaoupdate,
        cidade: cidadeupdate,
        cartao_nome: cartaonomeupdate,
        cartao_numero: cartaonumeroupdate,
        cartao_data: cartaodataupdate,
        cartao_cvv: cartaocvvupdate,
    },
      {
        where: { id: idsearch }
      })
    res.send({success: true, data: data, message: "Updated successful"});
  } catch (error) {
    next(error)
  }
}
// Comando para apagar o responsavel
controllers.deleteResponsavel = async (req, res, next) => {
  try {
    const { idsearch } = req.params;
    //check if id is not a number
    if (isNaN(idsearch)) return createError.BadRequest("Id is not a number");
    const del = await ResponsavelModel.destroy({
      where: { id: idsearch },
    });
    res.send({ success: true, deleted: del, message: "Delete successful" });
  } catch (error) {
    next(error);
  }
};

// Comandos Avançados
// Comando para ir buscar os ultimos 3 responsaveis pela sua confirmacao
controllers.GetLast3ResponsaveisforConfirmation = async (req, res, next) => {
  try {
    const latestResponsaveis = await ResponsavelModel.findAll({
      order: [["id", "DESC"]],
      limit: 3,
    });

    res.send({
      success: true,
      data: latestResponsaveis,
      message: "Últimos Responsaveis carregados",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocorreu um erro ao buscar os últimos Responsaveis." });
  }
};
// Comando para ir buscar os todos os responsaveis pela sua confirmacao
controllers.getAllResponsaveisforConfirmation = async (req, res) => {
  try {
    const Responsaveis = await ResponsavelModel.findAll({});

    res.json({ Responsaveis });
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro ao buscar os responsáveis para confirmação.' });
  }
};

// Comando para Aceitar Responsavel
controllers.Aceitar = async (req, res) => {
  const { responsavelId } = req.params.id;
  try {
    const Responsavel = await ResponsavelModel.findByPk(responsavelId);

    if (!Responsavel) {
      return res.status(404).json({ error: 'Responsável não encontrado.' });
    }

    Responsavel.confirmado = true;
    await Responsavel.save();

    res.json({ success: true, message: 'Pedido de responsável aceito com sucesso.' });
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro ao aceitar o pedido de responsável.' });
  }
};
// Comando para Recusar Responsavel
controllers.Recusar = async (req, res) => {
  const { responsavelId } = req.params.id;

  try {
    const Responsavel = await ResponsavelModel.findByPk(responsavelId);

    if (!Responsavel) {
      return res.status(404).json({ error: 'Responsável não encontrado.' });
    }

    Responsavel.confirmado = false;
    await Responsavel.save();

    res.json({ success: true, message: 'Pedido de responsável recusado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro ao recusar o pedido de responsável.' });
  }
};

module.exports = controllers;

