window.addEventListener("load", function(){
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(e){
        // e.preventDefault();}

       let errores = [];

        let campoNombre = document.querySelector("input.nombre");
        
        if (campoNombre.value == ""){
           errores.push ("el campo de nombre NO puede estar vacío")
        } else if(campoNombre.value.length < 5){
           errores.push ("EL campo de nombre tiene que tener más de 5 letras");
        }

        let campoDescripcion = document.querySelector("input.descripcion");
        
        if (campoDescripcion.value == ""){
           errores.push ("el campo de descrpcion NO puede estar vacío")
        } else if(campoDescripcion.value.length < 20){
           errores.push ("EL campo de nombre tiene que tener más de 20 letras");
        };
        
        if (errores.length > 0){
         e.preventDefault();

         let ulErrores =document.querySelector ("div.errores ul");
         for (let i = 0; i <errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
         }
     }
        
       

   
        
    })
})