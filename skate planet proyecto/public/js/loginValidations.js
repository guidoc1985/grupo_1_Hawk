window.addEventListener("load", function(){
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(e){
        // e.preventDefault();}


        let campoEmail = document.querySelector("input.email");
        
        if (campoEmail.value == ""){
           window.alert ("el campo de email NO puede estar vacío")
        } 

        let campoPass = document.querySelector("input.password");
        
        if (campoPass.value == ""){
           window.alert ("el campo de password NO puede estar vacío")
        } 
        
        
    })
})