window.addEventListener("load", function(){
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(e){
        // e.preventDefault();

        let errores = [];

        let campoNombre = document.querySelector("input.first_name");
        
        if (campoNombre.value == ""){
           errores.push ("el campo de nombre NO puede estar vacío")
        } else if(campoNombre.value.length < 2){
           errores.push ("EL campo de nombre tiene que tener más de 2 letras");
        }

        let campoApellido = document.querySelector("input.last_name");
        
        if (campoApellido.value == ""){
           errores.push ("el campo de apellido NO puede estar vacío")
        } else if(campoApellido.value.length < 2){
           errores.push ("EL campo de nombre tiene que tener más de 2 letras");
        };
        
        let campoEmail = document.querySelector("input.email");
        
        if (campoEmail.value == ""){
           errores.push ("el campo de email es obligatorio")
       
        };

        let campoPass = document.querySelector("input.password");
        
        if (campoPass.value == ""){
           errores.push ("el campo de password es obligatorio")
        } else if(campoPass.value.length < 8){
            errores.push ("EL campo de password tiene que tener más de 8 letras");
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