const mainController ={
   home: (req, res) =>{
        res.render('home');
    
    },
    login: (req, res) =>{
        res.render('login');
    
    },
    productCart: (req, res) =>{
        res.render('product-cart');
    
    },
    productDetail: (req, res) =>{
        res.render('product-detail');
    
    },
    register: (req, res) =>{
        res.render('register');
    
    },
};



module.exports = mainController;
