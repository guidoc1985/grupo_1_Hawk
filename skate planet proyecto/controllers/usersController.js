
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../models/User");
// const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
// const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
let db = require("../database/models");
const sequelize = db.sequelize;
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const usersController = {

  homeUsers: (req, res) => 
  
      {db.User.findAll().then((users) => {
        res.render("users", { users });
      });
    },

    detail: (req, res) => {
      db.User.findByPk(req.params.id).then((usuario) => {
        res.render("user-detail", { usuario });
      });
    },
    
  loginView: (req, res) => {
     return res.render("login");
    },

    loginAction: (req, res) => {
      let userToLogin = User.findByField('email', req.body.email);
      
      if(userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
        if (isOkThePassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
  
          if(req.body.remember_user) {
            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
          }
  
          return res.redirect('/');
        } 
        return res.render('login', {
          errors: {
            email: {
              msg: 'Las credenciales son inválidas'
            }
          }
        });
      }
  
      return res.render('login', {
        errors: {
          email: {
            msg: 'No se encuentra este email en nuestra base de datos'
          }
        }
      });
    },
    profile: (req, res) => {
      return res.render('user-perfil', {
        user: req.session.userLogged
      });
    },
  
    // logout: (req, res) => {
    //   res.clearCookie('userEmail');
    //   req.session.destroy();
    //   return res.redirect('/');
    // },

   
    // loginAction: (req, res) => {
    //   const user = req.body;
  
    //   req.session.user = user;
  
    //   res.cookie("userEmail", user.email, { maxAge: 1000 * 60 * 10 });
  
    //   res.redirect("/users/perfil");
    // },
  
    // perfilView: (req, res) => {
    //   if (req.session.user) {
    //     console.log(req.session.user);
  
    //     res.render("user-perfil", { user: req.session.user });
    //   }
  
    //   res.redirect("/users");
    // },
  
    logoutAction: (req, res) => {
      res.clearCookie("userEmail");
      req.session.destroy();
      res.redirect("/");
    },
  
    // ///////////////////////////////////////////////
    //te muestra el form de registro//
    create: (req, res) => {
      res.render("register.ejs");
    },
  //te deberia guardar el usuario//
    // store:(req, res) => {
      // const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    //     const resultValidation = validationResult(req);

    //     if(resultValidation.errors.length > 0){
    //       return res.render("register.ejs", {
    //         errors: resultValidation.mapped(),
    //       });
    //     }

    //     let userInDB = User.findByField("email", req.body.email);

    //     if (userInDB) {
    //       return res.render("register", {
    //         errors: {
    //           email: {
    //             msg: "Este email ya está registrado"
    //           }
    //         }
    //       });
    //     }

    //     let userToCreate = {
    //       ...req.body,
    //       password: bcryptjs.hashSync(req.body.password, 10),
    //       image: req.file.filename
    //     }

    //   let userCreated = User.create(userToCreate);

    //    res.redirect("/login");
    //   }
    // }
   
  store: async function (req, res) {
    try {
      const usuarioNuevo = await db.User.create({
        idUsuario: req.body.idUsuario,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        image: req.file?
        req.file.filename: "default-image.png"
       
      });

      if (req.file) {
        usuarioNuevo.image = req.file.filename;
      }
      // if (req.file) {
      //       productoNuevo.image = req.file.image;
      //     }
      
      //     products.push(productoNuevo);
      
          // const data = JSON.stringify(products, null, " ");
          // fs.writeFileSync(productsFilePath, data);
      console.log({ usuarioNuevo });
      res.redirect("/users");
    } catch (error) {
      console.log(error);
    }
  }, 
  edit: async function (req, res)  {
    try {

    const usuario = await db.User.findByPk(req.params.id);
    res.render("user-edit", { userToEdit : usuario });
  } catch (error) {
    console.log(error);
   
  }
    
  },

  update: function (req, res)  {
    
   
    db.User.update({
      idUsuario: req.body.idUsuario,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      image: req.file?
      req.file.filename: "default-image.png"
       
    }, {
      where: {
        idUsuario: req.params.id
      }
    });
    res.redirect("/users");
   
  },  
  
  

}
  module.exports = usersController;
  