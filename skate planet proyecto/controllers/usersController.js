
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const usersController = {

  homeUsers: (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    // Do the magic
    res.render("users", { users: users, toThousand }); // toThousand(p.price)

    
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
    store:(req, res) => {
      // const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
          return res.render("register.ejs", {
            errors: resultValidation.mapped(),
          });
        }

        let userInDB = User.findByField("email", req.body.email);

        if (userInDB) {
          return res.render("register", {
            errors: {
              email: {
                msg: "Este email ya está registrado"
              }
            }
          });
        }

        let userToCreate = {
          ...req.body,
          password: bcryptjs.hashSync(req.body.password, 10),
          image: req.file.filename
        }

      let userCreated = User.create(userToCreate);

       res.redirect("/login");
      }
    }
        // console.log("///////////////////////////////");
        // console.log(req.file);
        // console.log("///////////////////////////////");
        
    
        // const userNuevo = {
        //   id: Date.now(),
        //   firstName: req.body.firstName,
        //   lastName: req.body.lastName,
        //   email: req.body.email,
        //   password: req.body.password,
        //   image: "default-image.png",
        // };
    
        // /**
        //  * si hay file guardan el nombre de la imagen
        //  */
        // if (req.file) {
        //   userNuevo.image = req.file.filename;
        // }
    
        // users.push(userNuevo);
    
        // const data = JSON.stringify(users, null, " ");
        // fs.writeFileSync(usersFilePath, data);
        // res.redirect("/users");
    //   },
    
    
  
    // mainView: (req, res) => {
    //   res.redirect("/users");
    // },
  // };
  
  module.exports = usersController;
  