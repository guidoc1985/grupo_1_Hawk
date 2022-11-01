let db = require("../database/models");
const sequelize = db.sequelize;
const fs = require("fs");
const path = require("path");

// const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // HOME : EN REALIDAD MUESTRA EL /PRODUCTS
  home: (req, res) => 
  // {
  //   const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  //   // Do the magic
  //   res.render("products", { productos: products, toThousand }); // toThousand(p.price)
  //   {
      {db.Producto.findAll().then((productos) => {
        res.render("products", { productos });
      });
    },
    
  

  // Detail - DETALLE DE PRODUCTO, MUESTRA UN PRODUCTO 
  // detail: (req, res) => {
  //   const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  //   const producto = products.find((p) => p.id == req.params.id);
  //   res.render("detail", { producto: producto });
  // },

  detail: (req, res) => {
    db.Producto.findByPk(req.params.id).then((producto) => {
      res.render("detail", { producto });
    });
  },

  // Create - TE MUESTRA EL FORMULARIO DE CREACION DE PRODUCTOS
  create: (req, res) => {
    res.render("ingresar-productos.ejs");
  },

  // Create -  GUARDA EL PRODUCTO NUEVO
  // store: (req, res) => {
  //   const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

  //   console.log("///////////////////////////////");
  //   console.log(req.file);
  //   console.log("///////////////////////////////");
    

  //   const productoNuevo = {
  //     id: Date.now(),
  //     name: req.body.name,
  //     description: req.body.description,
  //     price: req.body.price,
  //     discount: req.body.discount,
  //     category: req.body.category,
  //     image: "default-image.png",
  //   };

  //   /**
  //    * si hay file guardan el nombre de la imagen
  //    */
  //   if (req.file) {
  //     productoNuevo.image = req.file.filename;
  //   }

  //   products.push(productoNuevo);

  //   const data = JSON.stringify(products, null, " ");
  //   fs.writeFileSync(productsFilePath, data);
  //   res.redirect("/products");
  // },

  store: async function (req, res) {
    try {
      const productoNuevo = await db.Producto.create({
        idProducto: req.body.idProducto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        price: req.body.price,
        id_categorias: req.body.id_categorias,
        image: req.file?
        req.file.filename: "default-image.png"
      });
  
      /**
       * si hay file guardan el nombre de la imagen
      //  */
      if (req.file) {
        productoNuevo.image = req.file.filename;
      }
  // db.Producto.push(productoNuevo)
          // const data = JSON.stringify(products, null, " ");
          // fs.writeFileSync(productsFilePath, data);
      console.log({ productoNuevo });
      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  },

  
  // Update - MUESTRA EL FORMULARIO DE EDICION DE PRODUCTOS
  edit: async function (req, res)  {
    try {
    // const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    // const producto = products.find((p) => p.id == req.params.id);
    const producto = await db.Producto.findByPk(req.params.id);
    res.render("editar-productos", { productToEdit : producto });
  } catch (error) {
    console.log(error);
   
  }
    
  },

  update: function (req, res)  {
    
    // const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    // const producto = products.find((p) => p.id == req.params.id);
    db.Producto.update({
        idProducto: req.body.idProducto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        price: req.body.price,
        id_categorias: req.body.id_categorias,
        image: req.file?
        req.file.filename: "default-image.png"
       
    }, {
      where: {
        idProducto: req.params.id
      }
    });
    res.redirect("/products");
   
  },
    
  destroy: async function (req, res) {
    try {
      // await db.ActorMovie.destroy({ where: {movie_id: req.params.id}})
      await db.Producto.destroy({
        where: {
          idProducto: req.params.id,
        },
      });
      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  },
  

 
  // Update - METODO DE EDICION
  // update: (req, res) => {
  //   const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  //   console.log(req.body);
  //   console.log(req.params.id);

  //   products.forEach((p) => {
  //     if (p.id == req.params.id) {
  //       p.name = req.body.name;
  //       p.price = req.body.price;
  //       p.discount = req.body.discount;
  //       p.description = req.body.description;
  //       p.category = req.body.category;

  //       if (req.file) {
  //         fs.unlinkSync("./public/images/products/" + p.image);
  //         p.image = req.file.filename;
  //       }
  //     }
  //   });

    /**
     *  indexof
     *  filter
     *  find
     */

  //   const data = JSON.stringify(products, null, " ");
  //   fs.writeFileSync(productsFilePath, data);

  //   res.redirect("/products/detail/" + req.params.id);
  // },

  // Delete -BORRA UN PRODUCTO DEL JSON
  // destroy: (req, res) => {
  //   let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  //   const producto = products.find((p) => p.id == req.params.id);

  //   products = products.filter((p) => p.id != req.params.id);

  //   if (producto && producto.image != "default-image.png") {
  //     fs.unlinkSync("./public/images/products/" + producto.image);
  //   }

  //   const data = JSON.stringify(products, null, " ");
  //   fs.writeFileSync(productsFilePath, data);
  //   res.redirect("/products");
  // },
};




module.exports = controller;
