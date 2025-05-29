ECHO est  ativado.
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
return &quot;Erro: divisão por zero.&quot;;
}
return a / b;
}
let n1 = Number(prompt(&quot;Digite o primeiro número:&quot;));
let n2 = Number(prompt(&quot;Digite o segundo número:&quot;));
let operacao = prompt(&quot;Digite a operação (+, -, *, /):&quot;);

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
resultado = &quot;Operação inválida.&quot;;

}

console.log(&quot;Resultado: &quot; + resultado);
