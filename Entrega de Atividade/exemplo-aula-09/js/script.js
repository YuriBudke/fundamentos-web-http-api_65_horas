// let: usado quando o valor PODE mudar depois
let temperatura = 22;
temperatura = 25; // permitido — o valor foi reatribuído

// const: usado quando o valor NÃO deve mudar depois de definido
const nomeDaCasa = "Casa Inteligente";
// nomeDaCasa = "Outro nome"; // ERRO! const não pode ser reatribuída

// Boa prática: use const por padrão, e só troque para let quando
// tiver certeza de que o valor vai precisar mudar

console.log(temperatura)
console.log(nomeDaCasa)

// Number: números, inteiros ou decimais
let idade = 25;
let preco = 19.90;

// String: texto, entre aspas simples, duplas ou crase
let nome = "Maria";
let saudacao = `Olá, ${nome}!`; // template literal — permite interpolar variáveis com ${}
console.log(`Olá, ${nome}!`)

// Boolean: verdadeiro ou falso
let ligado = true;
let desligado = false;
console.log("Ligado" + ligado)
console.log("Desligado" + desligado)

// Array: uma lista de valores
let comodos = ["sala", "cozinha", "quarto"];
console.log(comodos)

// Object: uma coleção de dados relacionados, em pares chave-valor
let casa = {
  nome: "Casa Inteligente",
  quartos: 3,
  temInternet: true
};
console.log(casa)

// ARITMÉTICOS: fazem contas
let soma = 10 + 5;        // 15
let resto = 10 % 3;       // 1 (resto da divisão — muito usado em lógica)
console.log(soma)
console.log(resto)

// DE COMPARAÇÃO: retornam true ou false
let igual = (5 === 5);     // true — === compara valor E tipo (recomendado)
let diferente = (5 !== 3); // true
let maior = (10 > 5);      // true
console.log(igual)
console.log(diferente)
console.log(maior)

// LÓGICOS: combinam condições
let temIngresso = true
let ehEstudante = true
let ehIdoso = false
let podeEntrar = (idade <= 18) && (temIngresso === true); // AND: as duas precisam ser true
let temDesconto = ( ehEstudante === true) || (ehIdoso === true); // OR: basta uma ser true
let naoEstaChovendo = false
let estaChovendo = !naoEstaChovendo; // NOT: inverte o valor
console.log("Pode entrar: " + podeEntrar)
console.log("Tem Desconto: " + temDesconto)
console.log("Não está chovendo: " + naoEstaChovendo)


temperatura = 28;

if (temperatura > 25) {
  console.log("Ligar o ar-condicionado");
} else if (temperatura < 18) {
  console.log("Ligar o aquecedor");
} else {
  console.log("Temperatura agradável, nada a fazer");
}

// FOR: repete um número definido de vezes — ótimo quando você sabe quantas vezes repetir
for (let i = 0; i < 5; i++) {
  console.log("Regando a planta número " + i);
}
// i = 0 (início) | i < 5 (condição de parada) | i++ (incremento a cada volta)

// WHILE: repete enquanto uma condição for verdadeira — ótimo quando não se sabe o número exato de repetições
let bateria = 100;
while (bateria > 0) {
  bateria -= 20;
  console.log("Bateria em: " + bateria + "%");
}

// Declaração de uma função — um "modo programado" reutilizável
function ligarModoCinema(nomeDoComodo) {
  console.log("Apagando luzes de: " + nomeDoComodo);
  console.log("Ligando a TV");
  console.log("Fechando as cortinas");
}

// Chamando (executando) a função, passando um parâmetro
ligarModoCinema("sala");

// Função com retorno de valor
function calcularMediaFinal(nota1, nota2) {
  const media = (nota1 + nota2) / 2;
  return media; // devolve o valor para quem chamou a função
}

const resultado = calcularMediaFinal(8, 6);
console.log(resultado); // 7