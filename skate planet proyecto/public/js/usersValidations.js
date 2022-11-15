window.addEventListener("load", function(){
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(e){
        // e.preventDefault();

        let campoNombre = document.querySelector("input.first_name");
        
        if (campoNombre.value == ""){
           window.alert ("el campo de nombre NO puede estar vacío")
        } else if(campoNombre.value.length < 2){
           window.alert ("EL campo de nombre tiene que tener más de 2 letras");
        }

        let campoApellido = document.querySelector("input.last_name");
        
        if (campoApellido.value == ""){
           window.alert ("el campo de apellido NO puede estar vacío")
        } else if(campoApellido.value.length < 2){
           window.alert ("EL campo de nombre tiene que tener más de 2 letras");
        };
        
        let campoEmail = document.querySelector("input.email");
        
        if (campoEmail.value == ""){
           window.alert ("el campo de email es obligatorio")
       
        };

        let campoPass = document.querySelector("input.password");
        
        if (campoPass.value == ""){
           window.alert ("el campo de password es obligatorio")
        } else if(campoPass.value.length < 8){
            window.alert ("EL campo de password tiene que tener más de 8 letras");
         };
        
        
    })
})