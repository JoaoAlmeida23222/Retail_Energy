var CompradorModel = require ('../models/CompradorModel');
const sequelize = require("../config/database");

const controllers = {}
//sequelize.sync();

// Metodos do Controlador Comprador
// Comandos Simples
// Comando para ir buscar todos os Comprador
controllers.GetAllComprador = async (req,res, next) =>{
    try {
      const data = await CompradorModel.findAll();
      res.send({ success: true, data: data });
    } catch (error) {
      next(error);
    }
}

// Comando de criar Comprador
controllers.createComprador = async (req, res, next) => {
  console.log(req.body);
  try {
    const a = await sequelize.transaction();
    const Comprador = await CompradorModel.create(
      {
        nomefinal: req.body.nomefinal,
        email: req.body.email,
        password: req.body.password,
      },
      { transaction: a }
    );
    await a.commit();
    res.send({ success: true, data: Comprador });
  } catch (e) {
    await a.rollback();
    next(e);
  }
};

// Comando para fazer login com os Comprador
controllers.loginComprador = async (req, res, next) => {
  try {
    const Comprador = await CompradorModel.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.send({ success: true, data: Comprador });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

// Comando para fazer Update com os Comprador
controllers.updateComprador = async (req, res, next) => {
  try {
    const { idsearch } = req.params;
    //check if id is not a number
    if (isNaN(idsearch)) return createError.BadRequest("id is not a number")

    const { nomeinicialupdate, nomefinalupdate, emailupdate, passwordupdate, enderecoupdate, enderecodetalhesupdate, codigopostalupdate, informacaoupdate, cidadeupdate, cartaonomeupdate, cartaonumeroupdate, cartaodataupdate, cartaocvvupdate  } = req.body;
    const data = await CompradorModel.update({
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
// Comando para apagar o Comprador
controllers.deleteComprador = async (req, res, next) => {
  try {
    const { idsearch } = req.params;
    //check if id is not a number
    if (isNaN(idsearch)) return createError.BadRequest("Id is not a number");
    const del = await CompradorModel.destroy({
      where: { id: idsearch },
    });
    res.send({ success: true, deleted: del, message: "Delete successful" });
  } catch (error) {
    next(error);
  }
};

// Comandos Avançados
// Comando para ir buscar os ultimos 3 Comprador pela sua confirmacao
controllers.GetLast3CompradorforConfirmation = async (req, res, next) => {
  try {
    const latestComprador = await CompradorModel.findAll({
      order: [["id", "DESC"]],
      limit: 3,
    });

    res.send({
      success: true,
      data: latestComprador,
      message: "Últimos compradores carregados",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocorreu um erro ao buscar os últimos Compradores." });
  }
};
// Comando para ir buscar os todos os Comprador pela sua confirmacao
controllers.getAllCompradorforConfirmation = async (req, res) => {
  try {
    const Comprador = await CompradorModel.findAll({});

    res.json({ Comprador });
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro ao buscar os Comprador para confirmação.' });
  }
};

// Comando para Aceitar Comprador
controllers.Aceitar = async (req, res) => {
  const { CompradorId } = req.params.id;

  try {
    const Comprador = await CompradorModel.findByPk(CompradorId);

    if (!Comprador) {
      return res.status(404).json({ error: 'Comprador não encontrado.' });
    }

    Comprador.confirmado = true;
    await Comprador.save();

    res.json({ success: true, message: 'Pedido de comprador aceitado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro ao aceitar o pedido de comprador.' });
  }
};
// Comando para Recusar Comprador
controllers.Recusar = async (req, res) => {
  const { CompradorId } = req.params.id;

  try {
    const Comprador = await CompradorModel.findByPk(CompradorId);

    if (!Comprador) {
      return res.status(404).json({ error: 'Comprador não encontrado.' });
    }

    Comprador.confirmado = false;
    await Comprador.save();

    res.json({ success: true, message: 'Pedido de comprador recusado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro ao recusar o pedido de comprador.' });
  }
};

module.exports = controllers;
