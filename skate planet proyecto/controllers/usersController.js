
const fs = require("fs");
const path = require("path");


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
      res.render("login");
    },
  
    loginAction: (req, res) => {
      const user = req.body;
  
      req.session.user = user;
  
      res.cookie("userEmail", user.email, { maxAge: 1000 * 60 * 10 });
  
      res.redirect("/users/perfil");
    },
  
    perfilView: (req, res) => {
      if (req.session.user) {
        console.log(req.session.user);
  
        res.render("user-perfil", { user: req.session.user });
      }
  
      res.redirect("/users");
    },
  
    logoutAction: (req, res) => {
      res.clearCookie("userEmail");
      req.session.destroy();
      res.redirect("/users");
    },
  
    ///////////////////////////////////////////////
    //te muestra el form de registro//
    create: (req, res) => {
      res.render("register.ejs");
    },
  //te deberia guardar el usuario//
    store:(req, res) => {
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    
        console.log("///////////////////////////////");
        console.log(req.file);
        console.log("///////////////////////////////");
        
    
        const userNuevo = {
          id: Date.now(),
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          image: "default-image.png",
        };
    
        /**
         * si hay file guardan el nombre de la imagen
         */
        if (req.file) {
          userNuevo.image = req.file.filename;
        }
    
        users.push(userNuevo);
    
        const data = JSON.stringify(users, null, " ");
        fs.writeFileSync(usersFilePath, data);
        res.redirect("/users");
      },
    
    
  
    mainView: (req, res) => {
      res.redirect("/users");
    },
  };
  
  module.exports = usersController;
  