ECHO est� ativado.
let usuariodigitado = prompt("Digite seu nome de usu�rio: ");
let senhadigitada = prompt("Digite sua senha: ");
let resultado = "";

let usuario1 = "admin 1", senha1 = "juju"
let usuario2 = "admin 2", senha2 = "julia"
let usuario3 = "admin 3", senha3 = "roxo"
let usuario4 = "admin 4", senha4 = "verde"
let usuario5 = "admin 5", senha5 = "rosa"
let usuario6 = "admin 6", senha6 = "sol"
let usuario7 = "admin 7", senha7 = "flor"
let usuario8 = "admin 8", senha8 = "moto"
let usuario9 = "admin 9", senha9 = "maratona"

function verificarlogin(usuario, senha) {
    let mensagem = "";

    if (usuariodigitado === usuario1 && senhadigitada === senha1) {
        mensagem = "Login efetuado com sucesso!";
    } else if (usuariodigitado === usuario2 && senhadigitada === senha2) {
        mensagem = "Login efetuado com sucesso!";
    } else if (usuariodigitado === usuario3 && senhadigitada === senha3) {
        mensagem = "Login efetuado com sucesso!";
    } else if (usuariodigitado === usuario4 && senhadigitada === senha4) {
        mensagem = "Login efetuado com sucesso!";
    } else if (usuariodigitado === usuario5 && senhadigitada === senha5) {
        mensagem = "Login efetuado com sucesso!";
    } else if (usuariodigitado === usuario6 && senhadigitada === senha6) {
        mensagem = "Login efetuado com sucesso!";
    } else if (usuariodigitado === usuario7 && senhadigitada === senha7) {
        mensagem = "Login efetuado com sucesso!";
    } else if (usuariodigitado === usuario8 && senhadigitada === senha8) {
        mensagem = "Login efetuado com sucesso!";
    } else if (usuariodigitado === usuario9 && senhadigitada === senha9) {
        mensagem = "Login efetuado com sucesso!";
    } else {
        mensagem = "Login negado. Usu�rio ou senha incorretos.";
    }

    return mensagem;
}

resultado = verificarlogin(usuariodigitado, senhadigitada);
console.log(resultado);


