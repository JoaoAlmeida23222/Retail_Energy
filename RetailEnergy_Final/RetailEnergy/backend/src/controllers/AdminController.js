var AdminModel = require ('../models/AdminModel');
const sequelize = require("../config/database");

const controllers = {}
sequelize.sync();

// Metodos do Controlador Admin
// Comando Simples
// Comando de buscar todos os Administradores
controllers.getAllAdmin = async (req, res, next) => {
    try {
      const data = await AdminModel.findAll();
      res.send({ success: true, data: data });
    } catch (error) {
      next(error);
    }
  };
  
  // Comando de criar Administradores
  controllers.createAdmin = async (req, res, next) => {
    const a = await sequelize.transaction();
    console.log(req.body);
    try {
      const Admin = await AdminModel.create(
        {
          nomeinicial: req.body.nomeinicial,
          nomefinal: req.body.nomefinal,
          email: req.body.email,
          password: req.body.password,
        },
        { transaction: a }
      );
      await a.commit();
      res.send({ success: true, data: Admin });
    } catch (e) {
      await a.rollback();
      next(e);
    }
  };
  
  // Comando para fazer login com os Administradores
 // controllers.loginAdmin = async (req, res, next) => {
   // try {
    //  const Admin = await AdminModel.findOne({
     //   where: {
      //    email: req.body.email,
       //   password: req.body.password,
       // },
     // });
     //  } catch (e) {
     // console.log(e);
    //  next(e);
   // }
 // };

 controllers.loginAdmin = async (req, res, next) => {
  try {
    const Admin = await AdminModel.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    if (Admin) {
      res.send({ success: true, data: Admin });
    } else {
      res.send({ success: false, message: 'Admin not found' });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
};

  
  // Comando para fazer Update com os Administradores
  controllers.updateAdmin = async (req, res, next) => {
    try {
      const { idsearch } = req.params;
      //check if id is not a number
      if (isNaN(idsearch)) return createError.BadRequest("id is not a number")
  
      const { nomeinicialupdate, nomefinalupdate, emailupdate, passwordupdate} = req.body;
      const data = await Cliente.update({
        nomeinicial: nomeinicialupdate,
        nomefinal: nomefinalupdate,
        email: emailupdate,
        password: passwordupdate,
      },
        {
          where: { id: idsearch }
        })
      res.send({success: true, data: data, message: "Updated successful"});
    } catch (error) {
      next(error)
    }
  }

  // Comando para apagar o Admin
  controllers.deleteAdmin = async (req, res, next) => {
  try {
    const { idsearch } = req.params;
    //check if id is not a number
    if (isNaN(idsearch)) return createError.BadRequest("Id is not a number");
    const del = await AdminModel.destroy({
      where: { id: idsearch },
    });
    res.send({ success: true, deleted: del, message: "Delete successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = controllers;