var TipodePropostaModel = require ('../models/TipodepropostaModel')
const sequelize = require("../config/database");

const controllers = {}
//sequelize.sync();

// Metodos do Controlador TipodeProposta
// Comandos Simples
// Comando para obter todos os tipos de RProposta
controllers.getAllTipoProposta = async (req, res, next) => {
    try {
        const data = await TipodePropostaModel.findAll();
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
};

// Comando para criar os tipos de Proposta
controllers.createTipoProposta = async (req, res, next) => {
    try {
        const t = await sequelize.transaction();
        const TiposdeProposta = await TipodePropostaModel.create(
            {
                nome: req.body.nome,
            },
            { transaction: t }
        );
        await t.commit();
        res.send({ success: true, data: TiposdeProposta });
    } catch (e) {
        await t.rollback();
        next(e);
    }
};

// Comando para encontrar os tipos de Proposta pelo seu Id
controllers.getTipoPropostabyID = async (req, res, next) => {
    try {
        const {idsearch} = req.params
        const data = await TipodePropostaModel.findByPk(idsearch)
        //check if id is not a number
        res.send({ success: true, data: data });
    } catch (error) {
        next(error)
    }
}

// Comando para dar update aos tipos de Proposta
controllers.updateTipoProposta = async (req, res, next) => {
    try {
        const { idsearch } = req.params;
        //check if id is not a number
        if (isNaN(idsearch)) return createError.BadRequest("id is not a number")

        const {nomeupdate} = req.body;
        const data = await TipodePropostaModel.update({
            nome: nomeupdate, 
        },
            {
                where: { id: idsearch }
            })
        res.send({ success: true, data: data, message: "Updated successful" });
    } catch (error) {
        next(error)
    }
}

// Comando para eliminar os tipos de Proposta
controllers.deleteTipoProposta = async (req, res, next) => {
    try {
        const { idsearch } = req.params;
        //check if id is not a number
        if (isNaN(idsearch)) return createError.BadRequest("id is not a number")
        const del = await TipodePropostaModel.destroy({
            where: { id: idsearch }
        })
        res.send({ success: true, deleted: del, message: "Deleted successful" });
    } catch (error) {
        next(error)
    }
}

module.exports = controllers;