const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController ={
   home: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const productsVisited = products.filter((p) => p.category == "visited");
    const productsInSale = products.filter((p) => p.category == "in-sale");

    res.render("home", {
      productos: products,
      productsInSale: productsInSale,
      productsVisited,
    });
  },
  search: (req, res) => {
    /**
     * req.params
     *
     * req.query
     * req.body
     */
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    let search = req.query.keywords;
    search = search.toLowerCase();

    const resultado = products.filter((p) =>
      p.name.toLowerCase().includes(search)
    );

    res.render("results", { productos: resultado, search: search });
  },

    login: (req, res) =>{
        res.render('login');
    
    },
    productCart: (req, res) =>{
        res.render('product-cart');
    
    },
    detail: (req, res) =>{
        res.render('detail');
    
    },
    register: (req, res) =>{
        res.render('register');
    
    },
    ingresarProductos: (req,res)=>{
        res.render('Ingresar-Productos');
    }
};



module.exports = mainController;
