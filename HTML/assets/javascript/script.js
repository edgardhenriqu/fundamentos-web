var nome = window.document.getElementById("nome")
var email = document.querySelector("#email")
var assunto = document.querySelector("#assunto")
var nomeOk = false
var emailOk = false
var assuntoOk = false
var mapa = document.querySelector("#mapa")

function validarNome(){
    let TxtNome = document.querySelector("#TxtNome")
    if(nome.value.length <2){
        TxtNome.innerHTML = "Nome inválido!"
        TxtNome.style.color = "red"
        nomeOk = false

    }else{ 
        TxtNome.innerHTML = "Nome válido!"
        TxtNome.style.color = "green"
        nomeOk = true
    }
}

function validarEmail(){
    let TxtEmail = document.querySelector("#TxtEmail")
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
        TxtEmail.innerHTML = "Email válido!"
        TxtEmail.style.color = "green"
        emailOk = true
    }else{
        TxtEmail.innerHTML = "Email inválido!"
        TxtEmail.style.color = "red"
        emailOk = false

    }
}


function Enviar(){
    if(nomeOk == true){
        alert("preenchido corretamente, enviado!")
    }else{
        alert("preencha o campo corretamente!")
    }
}

function validarAssunto(){
    let TxtAssunto = document.querySelector("#TxtAssunto")

    if(assunto.value.length >= 100){
        TxtAssunto.innerHTML = "O texto é muito grande, digite no máximo 100 caracteres"
        TxtAssunto.style.color = "red"
        TxtAssunto.style.display = "block"
    }else{
        TxtAssunto.style.display = "none"
        assuntoOk = true
    }
    }

    function mapaZoom(){
        mapa.style.width = "800px"
        mapa.style.height = "600px"
    }

    function mapaNormal(){
        mapa.style.width = "400px"
        mapa.style.height = "250px"
    }

