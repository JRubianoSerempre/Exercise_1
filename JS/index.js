//Declaration variables-getter
let names = document.getElementById('name');
let lastnames = document.getElementById('LastName');
let email = document.getElementById('email');
let year = document.getElementById('year');
let gender = document.getElementById('gender');
let pswd = document.getElementById('password');
let tyc = document.getElementById('TyC');


//Declaration variables-setter
let errorlname = document.getElementById('errorln');
let errmail = document.getElementById('errmail');
let errorname = document.getElementById('errorname');
let erryear = document.getElementById('erryear');
let errgender = document.getElementById('errgender');
let errpasss = document.getElementById('errpass');
let errtyc = document.getElementById('errtyc');


function validate(){
    const space=/^\s+$/;//RegEx for space

// Validation of Contact Name and LastName
    if(names.value==null || names.value ==''){
        errorname.innerHTML='Campo requerido';
    }

    if(lastnames.value==null || lastnames.value ==''){
        errorlname.innerHTML='Campo requerido';
    }
//Validation email
//Regular Expression
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(email.value == null || email.value ==''){
        errmail.innerHTML = 'Campo requerido';
    }else if(!emailRegex.test(email.value)){  //format validation with regular expressions
        errmail.innerHTML = 'Correo no válido';
    }
//validation year
    if(year.value==null || year.value=='' || space.test(year.value)){
        erryear.innerHTML='Campo requerido';
    }else if(isNaN(year.value)){
        erryear.innerHTML='No es un número';
    }else if(year.value < 18){
        erryear.innerHTML='Debe ser mayor de edad';
    }
//Validation gender
    if(gender.value=='default'){
        errgender.innerHTML='Campo requerido';
    }
//Validation password
    if(pswd.value == null || pswd.value==''||space.test(pswd.value)){
        errpasss.innerHTML='Campo requerido';
    }
//Validation T&C
    if(!tyc.checked){
        errtyc.innerHTML='Debe aceptar Términos y Condiciones';
    }
    return false;
}