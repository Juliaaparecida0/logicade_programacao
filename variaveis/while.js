ECHO est� ativado.

1-let senha
senha = prompt("Senha: ")
while(senha != 1234){
    console.log("Dados Incorretos!")
    senha = prompt("Senha: ")
}
console.log("Bem-Vindo!")

2- let usuario;
usuario = prompt("Usu�rio: ");
while (usuario != "1234") {
    console.log("Dados Incorretos!");
    usuario = prompt("Usu�rio: ");
}
console.log("Bem-Vindo!");

3-let senha;
senha = prompt("Insira sua senha: ");
while (senha != "1234") {
    console.log("Confirme sua senha!");
    senha = prompt("Senha: ");
}
console.log("Bem-Vindo!");

4- let usuario;
let senha;

usuario = prompt("Digite seu usu�rio: ");
senha = prompt("Digite sua senha: ");

while (usuario !== "admin" || senha !== "1234") {
    console.log("Confirme seu usu�rio e sua senha!");

    usuario = prompt("Digite seu usu�rio: ");
    senha = prompt("Digite sua senha: ");
}

console.log("Seja Bem-Vindo!");

5-let usuario 
let senha
usuario = prompt("digite seu usuario: ")
senha = prompt("digite sua senha: ")
while (usuario !== "admin" || senha != "1234"){
    console.log( "usuario ou senha incorretos")
    usuario = prompt("digite seu usuario: ")
senha = prompt("digite sua senha: ")
}
console.log("Bem-Vindo")

6-let usuario, senha
usuario = prompt("Usu�rio: ")
senha = prompt("Senha: ")
chance = 2
if (usuario !== "julia" || senha !== "1234"){
    while(chance != 0 ){
        console.log("Dados errados!")
console.log("Tente novamente! Voc� tem", chance,"chances.")
        usuario = prompt("Usu�rio: ")
        senha = prompt("Senha: ")
        chance--
    } 
    console.log("Acesso bloqueado.")
} else {
    console.log("Bem vindo(a)!")
}

7- let nomeCadastrado = prompt("Cadastre seu nome:");
let senhaCadastrada = prompt("Cadastre sua senha:");

let loginNome = prompt("Digite seu nome para fazer login:");
let loginSenha = prompt("Digite sua senha para fazer login:");

while (loginNome !== nomeCadastrado || loginSenha !== senhaCadastrada) {
  console.log("Login ou senha inv�lidos! Tente novamente.");

  loginNome = prompt("Digite seu nome para fazer login:");
  loginSenha = prompt("Digite sua senha para fazer login:");
}

console.log("Login realizado com sucesso! Bem-vindo(a), " + loginNome + "!")
;

8 -let nome = prompt("Cadastre seu nome:");
let senha = prompt("Cadastre sua senha:");

while (true) {
  let login = prompt("Digite seu nome:");
  let senhaLogin = prompt("Digite sua senha:");

  if (login === nome && senhaLogin === senha) {
    console.log("Login realizado com sucesso! Bem-vindo(a), " + login + "!");
    break;
  }

  console.log("Login ou senha inv�lidos!");
  if (prompt("Esqueceu a senha? (sim/n�o)") === "sim") {
    console.log("Sua senha �: " + senha);
  }
}

9- let usuarioCadastrado = prompt("Cadastre seu usu�rio:");
let senhaCadastrada = prompt("Cadastre sua senha:");

while (true) {

  let usuarioLogin = prompt("Digite seu usu�rio:");
  let senhaLogin = prompt("Digite sua senha:");

  if (usuarioLogin === usuarioCadastrado && senhaLogin === senhaCadastrada) {
    console.log("Voc� est� logado!");
    
    let comando = "";
    while (comando !== "sair") {
      comando = prompt("Digite 'sair' para fazer logout:");
    }

    console.log("Logout realizado. At� mais!");
    break;
  } else {
    console.log("Usu�rio ou senha incorretos. Tente novamente.");
  }
}
