ECHO est� ativado.
function somar(a, b) {
return a + b;
}
function subtrair(a, b) {
return a - b;
}
function multiplicar(a, b) {
return a * b;
}
function dividir(a, b) {
if (b === 0) {
return &quot;Erro: divis�o por zero.&quot;;
}
return a / b;
}
let n1 = Number(prompt(&quot;Digite o primeiro n�mero:&quot;));
let n2 = Number(prompt(&quot;Digite o segundo n�mero:&quot;));
let operacao = prompt(&quot;Digite a opera��o (+, -, *, /):&quot;);

let resultado;

if (operacao === &quot;+&quot;) {
resultado = somar(n1, n2);
} else if (operacao === &quot;-&quot;) {
resultado = subtrair(n1, n2);
} else if (operacao === &quot;*&quot;) {
resultado = multiplicar(n1, n2);
} else if (operacao === &quot;/&quot;) {
resultado = dividir(n1, n2);
} else {
resultado = &quot;Opera��o inv�lida.&quot;;

}

console.log(&quot;Resultado: &quot; + resultado);
