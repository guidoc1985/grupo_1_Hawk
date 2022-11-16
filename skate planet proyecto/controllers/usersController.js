
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
    

    loginAction: async function (req, res)  {
   try {
    let userToLogin = await db.User.findOne({
      where : { email : req.body.email }
    })
   
    // .then((resultado)=> {
      
    //   console.log(resultado)
  console.log (userToLogin)
   if(userToLogin)
   {
     let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.dataValues.password);
      console.log(isOkThePassword)
        if (isOkThePassword) {
          delete userToLogin.dataValues.password;
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
    // })
    } catch (error) {
      console.log(error);
    }
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
    // store: async function (req, res) {
    //   try {
    //   // const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    //     const resultValidation = validationResult(req);

    //     if(resultValidation.errors.length > 0){
    //       return res.render("register.ejs", {
    //         errors: resultValidation.mapped(),
    //       });
    //     }

    //     let userInDB =  db.User.findAll().then("email", req.body.email);

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

    //   let userCreated = db.User.create(userToCreate);

    //    res.redirect("/login");
      
    // } catch (error) {
    //   console.log(error);
    // }
    // },
   
    store: async function (req, res) {
      const resultValidation = validationResult(req);
  
      if(resultValidation.errors.length > 0){
        return res.render("register.ejs", {
          old : req.body,
          errors: resultValidation.mapped(),
          
        });
      }
      try {
        const usuarioNuevo = await db.User.create({
          
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password:bcryptjs.hashSync(req.body.password, 10),
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
  destroy: async function (req, res) {
    try {
      // await db.ActorMovie.destroy({ where: {movie_id: req.params.id}})
      await db.User.destroy({
        where: {
          idUsuario: req.params.id,
        },
      });
      res.redirect("/users");
    } catch (error) {
      console.log(error);
    }
  },
  
  

}
  module.exports = usersController;
  