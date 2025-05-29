ECHO est  ativado.
1) let idioma = prompt(&quot;Escolha um idioma (Portugues, Ingles,
Espanhol):&quot;);

switch (idioma) {
case &quot;Portugues&quot;:
console.log(&quot;Olá!&quot;);
break;
case &quot;Ingles&quot;:
console.log(&quot;Hello!&quot;);
break;
case &quot;Espanhol&quot;:
console.log(&quot;¡Hola!&quot;);
break;
default:
console.log(&quot;Idioma não reconhecido.&quot;);
}
2) let numero = prompt(&quot;Digite um número de 1 a 7:&quot;);

switch (numero) {
case &quot;1&quot;:
console.log(&quot;Domingo&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Segunda-feira&quot;);
break;
case &quot;3&quot;:

console.log(&quot;Terça-feira&quot;);
break;
case &quot;4&quot;:
console.log(&quot;Quarta-feira&quot;);
break;
case &quot;5&quot;:
console.log(&quot;Quinta-feira&quot;);
break;
case &quot;6&quot;:
console.log(&quot;Sexta-feira&quot;);
break;
case &quot;7&quot;:
console.log(&quot;Sábado&quot;);
break;
default:
console.log(&quot;Número inválido.&quot;);
}
3) let transporte = prompt(&quot;Escolha o transporte (1-Carro, 2-Bicicleta, 3-
Ônibus):&quot;);

switch (transporte) {
case &quot;1&quot;:
console.log(&quot;Você escolheu um Carro.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Você escolheu uma Bicicleta.&quot;);
break;
case &quot;3&quot;:

console.log(&quot;Você escolheu um Ônibus.&quot;);
break;
default:
console.log(&quot;Transporte inválido.&quot;);
}
4) let urgencia = prompt(&quot;Digite o nível de urgência (1-Baixa, 2-Média, 3-
Alta):&quot;);

switch (urgencia) {
case &quot;1&quot;:
console.log(&quot;Urgência baixa.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Urgência média.&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Urgência alta.&quot;);
break;
default:
console.log(&quot;Nível de urgência inválido.&quot;);
}
5) let categoria = prompt(&quot;Digite a categoria do veículo (compacto, SUV,
caminhão):&quot;);

switch (categoria) {
case &quot;compacto&quot;:
console.log(&quot;Você escolheu um veículo compacto.&quot;);
break;

case &quot;SUV&quot;:
console.log(&quot;Você escolheu um SUV.&quot;);
break;
case &quot;caminhão&quot;:
console.log(&quot;Você escolheu um caminhão.&quot;);
break;
default:
console.log(&quot;Categoria de veículo inválida.&quot;);
}
6) let tempo = prompt(&quot;Digite o tempo estacionado (em horas):&quot;);

switch (tempo) {
case &quot;1&quot;:
console.log(&quot; A Tarifa é R$10,00&quot;);
break;
case &quot;2&quot;:
console.log(&quot;A Tarifa é R$15,00&quot;);
break;
case &quot;3&quot;:
console.log(&quot;A Tarifa é R$20,00&quot;);
break;
default:
console.log(&quot;Tempo inválido.&quot;);
}
7) let dificuldade = prompt(&quot;Digite qual o nível de dificuldade (1-Fácil, 2-
Médio, 3-Difícil):&quot;);

switch (dificuldade) {

case &quot;1&quot;:
console.log(&quot;Nível fácil.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Nível médio.&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Nível difícil.&quot;);
break;
default:
console.log(&quot;Nível de dificuldade inválido.&quot;);
}
8) let servico = prompt(&quot;Escolha o serviço da academia (yoga, musculação,
personal):&quot;);

switch (servico) {
case &quot;yoga&quot;:
console.log(&quot;Aula de Yoga.&quot;);
break;
case &quot;musculação&quot;:
console.log(&quot;Aula de Musculação.&quot;);
break;
case &quot;personal&quot;:
console.log(&quot;Serviço de Personal Trainer.&quot;);
break;
default:
console.log(&quot;Serviço inválido.&quot;);
}

9) let ingresso = prompt(&quot;Escolha qual o tipo de ingresso (1 - Estudante, 2 -
Meia entrada, 3 - Inteira):&quot;);

switch (ingresso) {
case &quot;1&quot;:
console.log(&quot;Preço do ingresso para Estudante: R$20,00.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Preço do ingresso Meia entrada: R$30,00.&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Preço do ingresso Inteira: R$50,00.&quot;);
break;
default:
console.log(&quot;Opção inválida. Escolha 1, 2 ou 3.&quot;);
}
10) let idade = prompt(&quot;Escolha a faixa etária (1 - Menos de 18 anos, 2 - 18
a 40 anos, 3 - Acima de 40 anos):&quot;);

switch (idade) {
case &quot;1&quot;:
console.log(&quot;Nível de dificuldade: Fácil.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Nível de dificuldade: Médio.&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Nível de dificuldade: Avançado.&quot;);

break;
default:
console.log(&quot;Opção inválida. Escolha 1, 2 ou 3.&quot;);
}
11) let genero = prompt(&quot;Escolha o gênero musical (1 - Rock, 2 - Jazz, 3 -
Clássico):&quot;);

switch (genero) {
case &quot;1&quot;:
console.log(&quot;Instrumentos típicos de Rock: Guitarra, Bateria,
Baixo.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Instrumentos típicos de Jazz: Saxofone, Piano,
Contrabaixo.&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Instrumentos típicos de Música Clássica: Violino, Piano,
Cello.&quot;);
break;
default:
console.log(&quot;Opção inválida. Escolha 1, 2 ou 3.&quot;);
}
12) let curso = prompt(&quot;Escolha a área do curso (1 - Front-end, 2 - Back-
end, 3 - Mobile):&quot;);

switch (curso) {
case &quot;1&quot;:
console.log(&quot;Curso de Front-end: HTML, CSS, JavaScript.&quot;);

break;
case &quot;2&quot;:
console.log(&quot;Curso de Back-end: Node.js, Python, Java.&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Curso de Mobile: Desenvolvimento para iOS e
Android.&quot;);
break;
default:
console.log(&quot;Opção inválida. Escolha 1, 2 ou 3.&quot;);
}
13) let idadeAtleta = prompt(&quot;Escolha a faixa etária do atleta (1 - Menos de
18 anos, 2 - 18 a 35 anos, 3 - Acima de 35 anos):&quot;);

switch (idadeAtleta) {
case &quot;1&quot;:
console.log(&quot;Nível de habilidade: Iniciante.&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Nível de habilidade: Intermediário.&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Nível de habilidade: Avançado.&quot;);
break;
default:
console.log(&quot;Opção inválida. Escolha 1, 2 ou 3.&quot;);
}

14) let desafio = prompt(&quot;Escolha o nível de dificuldade (1 - Básico, 2 -
Intermediário, 3 - Avançado):&quot;);

switch (desafio) {
case &quot;1&quot;:
console.log(&quot;Desafio básico: Operações simples (adição,
subtração).&quot;);
break;
case &quot;2&quot;:
console.log(&quot;Desafio intermediário: Problemas com frações e
decimais.&quot;);
break;
case &quot;3&quot;:
console.log(&quot;Desafio avançado: Cálculos com álgebra e geometria.&quot;);
break;
default:
console.log(&quot;Opção inválida. Escolha 1, 2 ou 3.&quot;);
}