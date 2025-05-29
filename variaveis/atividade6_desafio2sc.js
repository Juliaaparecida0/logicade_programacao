ECHO est  ativado.
let RespostaCorreta = 0;
let RespostaIncorreta = 0;

1
console.log(&quot;1) Qual é a idade para ser considerado maior de
idade?&quot;);
console.log(&quot;A - 18&quot;);
console.log(&quot;B - 15&quot;);
console.log(&quot;C - 12&quot;);

let resposta1 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta1.toUpperCase()) {
case &quot;A&quot;:
console.log(&quot;Maior de idade&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Menor de idade&quot;);
RespostaIncorreta++;
}

2
console.log(&quot;2) Se for 14h, que saudação você deve usar?&quot;);
console.log(&quot;A - Boa noite&quot;);
console.log(&quot;B - Bom dia&quot;);
console.log(&quot;C - Boa tarde&quot;);

let resposta2 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta2.toUpperCase()) {
case &quot;C&quot;:
console.log(&quot;Boa tarde&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Saudação incorreta&quot;);
RespostaIncorreta++;
}

3
console.log(&quot;3) Com qual idade você pode entrar no evento?&quot;);
console.log(&quot;A - 14&quot;);
console.log(&quot;B - 16&quot;);
console.log(&quot;C - 12&quot;);

let resposta3 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta3.toUpperCase()) {

case &quot;B&quot;:
console.log(&quot;Pode entrar no evento&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Não pode entrar no evento&quot;);
RespostaIncorreta++;
}

4
console.log(&quot;4) Qual número é maior?&quot;);
console.log(&quot;A - 10&quot;);
console.log(&quot;B - 20&quot;);
console.log(&quot;C - 10&quot;);

let resposta4 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta4.toUpperCase()) {
case &quot;B&quot;:
console.log(&quot;O maior número é 20&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Resposta errada&quot;);
RespostaIncorreta++;
}

5
console.log(&quot;5) Qual temperatura é considerada térmica?&quot;);
console.log(&quot;A - 10°C&quot;);
console.log(&quot;B - 20°C&quot;);
console.log(&quot;C - 30°C&quot;);

let resposta5 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta5.toUpperCase()) {
case &quot;B&quot;:
console.log(&quot;Térmico&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Não é térmico&quot;);
RespostaIncorreta++;
}

6
console.log(&quot;6) Qual palavra está correta?&quot;);
console.log(&quot;A - Felicidade&quot;);
console.log(&quot;B - Tristeza&quot;);
console.log(&quot;C - Alegria&quot;);

let resposta6 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta6.toUpperCase()) {

case &quot;A&quot;:
console.log(&quot;Palavra correta&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Palavra incorreta&quot;);
RespostaIncorreta++;
}

7
console.log(&quot;7) O que significa ter 5 moedas?&quot;);
console.log(&quot;A - Muitas moedas&quot;);
console.log(&quot;B - Poucas moedas&quot;);
console.log(&quot;C - Quantidade média&quot;);

let resposta7 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta7.toUpperCase()) {
case &quot;B&quot;:
console.log(&quot;Poucas moedas&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Resposta errada&quot;);
RespostaIncorreta++;
}

8
console.log(&quot;8) O que indica uma temperatura de 35°C?&quot;);
console.log(&quot;A - Frio&quot;);
console.log(&quot;B - Calor&quot;);
console.log(&quot;C - Muito quente&quot;);

let resposta8 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta8.toUpperCase()) {
case &quot;C&quot;:
console.log(&quot;Muito quente&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Resposta incorreta&quot;);
RespostaIncorreta++;
}

9
console.log(&quot;9) O número -3 é:&quot;);
console.log(&quot;A - Positivo&quot;);
console.log(&quot;B - Zero&quot;);
console.log(&quot;C - Negativo&quot;);

let resposta9 = prompt(&quot;Digite sua resposta: &quot;);

switch (resposta9.toUpperCase()) {
case &quot;C&quot;:
console.log(&quot;Negativo&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Resposta incorreta&quot;);
RespostaIncorreta++;
}

10
console.log(&quot;10) Um aluno com nota 7 está:&quot;);
console.log(&quot;A - Aprovado&quot;);
console.log(&quot;B - Recuperação&quot;);
console.log(&quot;C - Reprovado&quot;);

let resposta10 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta10.toUpperCase()) {
case &quot;A&quot;:
console.log(&quot;Aprovado&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Reprovado&quot;);
RespostaIncorreta++;

}

11
console.log(&quot;11) Qual animal está listado?&quot;);
console.log(&quot;A - Cachorro&quot;);
console.log(&quot;B - Cavalo&quot;);
console.log(&quot;C - Cobra&quot;);

let resposta11 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta11.toUpperCase()) {
case &quot;A&quot;:
console.log(&quot;Animal listado&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Animal não listado&quot;);
RespostaIncorreta++;
}

12
console.log(&quot;12) Qual dia é fim de semana?&quot;);
console.log(&quot;A - Sábado&quot;);
console.log(&quot;B - Quarta&quot;);
console.log(&quot;C - Segunda&quot;);

let resposta12 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta12.toUpperCase()) {
case &quot;A&quot;:
console.log(&quot;Fim de semana&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Dia útil&quot;);
RespostaIncorreta++;
}

13
console.log(&quot;13) Quantos anos de experiência tornam alguém
experiente?&quot;);
console.log(&quot;A - 1&quot;);
console.log(&quot;B - 2&quot;);
console.log(&quot;C - 3&quot;);

let resposta13 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta13.toUpperCase()) {
case &quot;C&quot;:
console.log(&quot;Experiente&quot;);
RespostaCorreta++;
break;
default:

console.log(&quot;Iniciante&quot;);
RespostaIncorreta++;
}

14
console.log(&quot;14) O número 15 está em qual faixa?&quot;);
console.log(&quot;A - Fora do intervalo&quot;);
console.log(&quot;B - Dentro do intervalo 10 a 20&quot;);
console.log(&quot;C - Negativo&quot;);

let resposta14 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta14.toUpperCase()) {
case &quot;B&quot;:
console.log(&quot;Dentro do intervalo&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Fora do intervalo&quot;);
RespostaIncorreta++;
}

15
console.log(&quot;15) Com qual idade pode-se tirar CNH?&quot;);
console.log(&quot;A - 17&quot;);
console.log(&quot;B - 18&quot;);

console.log(&quot;C - 15&quot;);

let resposta15 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta15.toUpperCase()) {
case &quot;B&quot;:
console.log(&quot;Pode tirar carteira de motorista&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Não pode tirar carteira de motorista&quot;);

16
console.log(&quot;16) O número 0 é:&quot;);
console.log(&quot;A - Negativo&quot;);
console.log(&quot;B - Positivo&quot;);
console.log(&quot;C - Zero&quot;);

let resposta16 = prompt(&quot;Digite sua resposta: &quot;);
switch (resposta16.toUpperCase()) {
case &quot;C&quot;:
console.log(&quot;Zero&quot;);
RespostaCorreta++;
break;
default:
console.log(&quot;Resposta incorreta&quot;);

RespostaIncorreta++;
}

console.log(`\nTotal de respostas corretas: ${RespostaCorreta}`);
console.log(`Total de respostas incorretas:
${RespostaIncorreta}`); 
