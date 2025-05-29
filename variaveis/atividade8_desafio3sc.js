ECHO est  ativado.
let plataforma = prompt("Qual plataforma você pretende usar? cmd ou linux");

if (plataforma === "cmd" || plataforma === "linux") {

    if (plataforma === "linux") {
        console.log("Modo Linux ativado!");
    } else {
        console.log("Modo CMD ativado!");
    }

    let comando = prompt("Qual comando você quer saber?");

    if (plataforma === "cmd") {
        switch (comando) {
            case "dir":
                console.log("dir - Lista os arquivos e subpastas de uma pasta.");
                console.log("Exemplo: dir");
                break;
            case "mkdir":
                console.log("mkdir - Cria um diretório ou subdiretório.");
                console.log("Exemplo: mkdir novaPasta");
                break;
            case "cd":
                console.log("cd - Acessa uma pasta.");
                console.log("Exemplo: cd pasta");
                break;
            case "cd..":
                console.log("cd.. - Volta uma pasta.");
                console.log("Exemplo: cd..");
                break;
            case "del":
                console.log("del - Deleta arquivos.");
                console.log("Exemplo: del arquivo.txt");
                break;
            case "cls":
                console.log("cls - Limpa a tela do CMD.");
                console.log("Exemplo: cls");
                break;
            case "echo":
                console.log("echo - Exibe mensagens ou grava texto em arquivo.");
                console.log("Exemplo: echo Hello World");
                break;
            case "copy":
                console.log("copy - Copia arquivos.");
                console.log("Exemplo: copy a.txt b.txt");
                break;
            case "move":
                console.log("move - Move ou renomeia arquivos/pastas.");
                console.log("Exemplo: move a.txt novaPasta/");
                break;
            case "rmdir":
                console.log("rmdir - Remove diretórios vazios.");
                console.log("Exemplo: rmdir pasta");
                break;
            case "exit":
                console.log("exit - Encerra o terminal.");
                break;
            default:
                console.log("Comando não reconhecido no CMD.");
        }
    } else if (plataforma === "linux") {
        switch (comando) {
            case "mkdir":
                console.log("mkdir - Cria uma nova pasta.");
                console.log("Exemplo: mkdir novaPasta");
                break;
            case "ls":
                console.log("ls - Lista os arquivos e diretórios.");
                console.log("Exemplo: ls");
                break;
            case "cd":
                console.log("cd - Acessa um diretório.");
                console.log("Exemplo: cd pasta");
                break;
            case "cd..":
                console.log("cd.. - Volta uma pasta.");
                console.log("Exemplo: cd..");
                break;
            case "rm":
                console.log("rm - Remove arquivos ou diretórios.");
                console.log("Exemplo: rm arquivo.txt");
                break;
            case "clear":
                console.log("clear - Limpa o terminal.");
                console.log("Exemplo: clear");
                break;
            case "cp":
                console.log("cp - Copia arquivos ou diretórios.");
                console.log("Exemplo: cp arquivo.txt /destino/");
                break;
            case "mv":
                console.log("mv - Move ou renomeia arquivos ou pastas.");
                console.log("Exemplo: mv a.txt novaPasta/");
                break;
            case "cat":
                console.log("cat - Exibe o conteúdo de arquivos.");
                console.log("Exemplo: cat texto.txt");
                break;
            case "echo":
                console.log("echo - Exibe uma mensagem no terminal.");
                console.log("Exemplo: echo 'Olá, mundo'");
                break;
            default:
                console.log("Comando não reconhecido no Linux.");
        }
    }

} else {
    console.log("Plataforma inválida. Digite 'cmd' ou 'linux'.");
}

