window.onload = iniciar;

function iniciar(){
    document.getElementById("confirmar").addEventListener('click', validar,false)
}
function validaRut(){
    let elemento= document.getElementById("rut");
    if(isNaN(elemento.value), elemento.value==null){
        alert("Debes ingresar un Rut valido");
        return false;
    }
    return true
}
function validaNom(){
    let elemento= document.getElementById("nombrecom");
    if(elemento.value=="", elemento.value==null){
        alert("Debes ingresar un Nombre valido");
        return false;
    }
    return true
}
function validaTel(){
    let elemento= document.getElementById("telefono");
    if(isNaN(elemento.value), elemento.value=="", elemento.value==null){
        alert("Debes ingresar un número de teléfono valido");
        return false;
    }
    return true
}
function validaEmail(){
    let elemento= document.getElementById("email");
    if(elemento.value=="", elemento.value==null){
        alert("Debes ingresar un email valido");
        return false;
    }
    return true
}

function validar(e){
    if(validaRut(), validaNom(), validaTel(), validaEmail(), confirm("Presione aceptar si esta seguro que los datos son correctos")){
        return true
    }else{
        e.preventDefault();
        return false
    }
}