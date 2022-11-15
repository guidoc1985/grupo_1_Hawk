window.addEventListener("load", function(){
    let formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(e){
        // e.preventDefault();}

        
function Focus(){
   document.getElementById("nombre").focus();
}
Focus();

        let campoNombre = document.querySelector("input.nombre");
        
        if (campoNombre.value == ""){
           window.alert ("el campo de nombre NO puede estar vacío")
        } else if(campoNombre.value.length < 5){
           window.alert ("EL campo de nombre tiene que tener más de 5 letras");
        }

        let campoDescripcion = document.querySelector("input.descripcion");
        
        if (campoDescripcion.value == ""){
           window.alert ("el campo de descrpcion NO puede estar vacío")
        } else if(campoDescripcion.value.length < 20){
           window.alert ("EL campo de nombre tiene que tener más de 20 letras");
        };
        
        
       

   
        
    })
})