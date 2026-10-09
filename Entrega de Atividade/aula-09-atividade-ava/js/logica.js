
//Nivel facil


//1
function tabuada(numero){
    for(let i = 1; i <= 10 ; i++){
        console.log(numero + " X " + i + " = " + (numero * i));
    }
}

tabuada(5);


//2
let frutas = ["Maçã", "Banana", "Uva", "Morango", "Abacaxi"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


//3
let numeros = [12, 45, 7, 89, 23];

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("O maior número é: " + maior);


//Nivem medio


//1
let nomes = ["Carlos", "Maria", "João", "Ana", "Pedro"];

function contarNomes() {
    let quantidade = nomes.length;

    console.log("Quantidade de nomes: " + quantidade);
}

contarNomes();


//2
let numeros1 = [10, 15, 20, 7, 8, 13, 4, 9];

function filtrarPares() {
    for (let i = 0; i < numeros1.length; i++) {
        if (numeros1[i] % 2 === 0) {
            console.log(numeros1[i]);
        }
    }
}

filtrarPares();


//3
function calcularMedia(numeros) {
    if (numeros.length === 0) {
        console.log("Não existem números para calcular a média.");
        return;
    }

    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }

    let media = soma / numeros.length;

    console.log("Média: " + media);
}

calcularMedia([7, 8, 9, 6, 10]);


//4
let aluno = {
    nome: "Carlos",
    idade: 20,
    notas: [7, 8, 9]
};

function calcularMediaAlunoIndividual() {
    let soma = 0;

    for (let i = 0; i < aluno.notas.length; i++) {
        soma = soma + aluno.notas[i];
    }

    let media = soma / aluno.notas.length;

    console.log("Aluno: " + aluno.nome);
    console.log("Média: " + media);
}

calcularMediaAlunoIndividual();


//5
function verificarAprovacao(media) {
    if (media >= 7) {
        console.log("Aprovado");
    } else if (media >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

verificarAprovacao(8);


//6
function inverterArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

inverterArray(["Maçã", "Banana", "Uva", "Morango"]);


//7
function contarVogais(palavra) {
    let quantidade = 0;
    let vogais = "aeiou";

    palavra = palavra.toLowerCase();

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            quantidade++;
        }
    }

    console.log("Quantidade de vogais: " + quantidade);
}

contarVogais("Programacao");


//Nivel Avançado


//1 - Cadastro de produtos

let produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Monitor", preco: 900, estoque: 3 },
    { nome: "Headset", preco: 250, estoque: 0 }
];

function listarProdutosDisponiveis() {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].estoque > 0) {
            console.log(
                produtos[i].nome +
                " | Preço: R$ " + produtos[i].preco.toFixed(2) +
                " | Estoque: " + produtos[i].estoque
            );
        }
    }
}

listarProdutosDisponiveis();


//2 - Carrinho de compras

let carrinho = [
    { nome: "Notebook", preco: 3500, quantidade: 1 },
    { nome: "Mouse", preco: 80, quantidade: 2 },
    { nome: "Teclado", preco: 150, quantidade: 1 }
];

function calcularTotalCompra(carrinho) {
    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco * carrinho[i].quantidade;
    }

    return total;
}

console.log(
    "Total da compra: R$ " + calcularTotalCompra(carrinho).toFixed(2)
);


//3 - Maior e menor preço

let listaPrecos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Teclado", preco: 150 }
];

function encontrarMaiorEMenorPreco(lista) {
    if (lista.length === 0) {
        console.log("Não existem produtos cadastrados.");
        return;
    }

    let maisCaro = lista[0];
    let maisBarato = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i].preco > maisCaro.preco) {
            maisCaro = lista[i];
        }

        if (lista[i].preco < maisBarato.preco) {
            maisBarato = lista[i];
        }
    }

    console.log(
        "Mais caro: " + maisCaro.nome +
        " - R$ " + maisCaro.preco.toFixed(2)
    );

    console.log(
        "Mais barato: " + maisBarato.nome +
        " - R$ " + maisBarato.preco.toFixed(2)
    );
}

encontrarMaiorEMenorPreco(listaPrecos);


//4 - Sistema de notas

let alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Carlos", notas: [5, 6, 4] },
    { nome: "Mariana", notas: [7, 5, 8] },
    { nome: "Pedro", notas: [3, 4, 5] }
];

function calcularMediaAluno(aluno) {
    if (aluno.notas.length === 0) {
        return null;
    }

    let soma = 0;

    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }

    return soma / aluno.notas.length;
}

function verificarSituacaoAluno(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function listarSituacaoAlunos(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        let media = calcularMediaAluno(alunos[i]);

        if (media === null) {
            console.log(alunos[i].nome + " | Sem notas cadastradas");
        } else {
            let situacao = verificarSituacaoAluno(media);

            console.log(
                alunos[i].nome +
                " | Média: " + media.toFixed(2) +
                " | Situação: " + situacao
            );
        }
    }
}

listarSituacaoAlunos(alunos);


//5 - Contador de palavras

function contarPalavras(frase) {
    let palavras = frase.toLowerCase().match(/[a-zá-úâêôãõç]+/gi) || [];
    let contagem = {};

    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i].toLowerCase();

        if (contagem[palavra] === undefined) {
            contagem[palavra] = 1;
        } else {
            contagem[palavra]++;
        }
    }

    for (let palavra in contagem) {
        console.log(palavra + ": " + contagem[palavra]);
    }
}

contarPalavras("javascript é legal e javascript é poderoso");


//6 - Sistema completo de funcionários

let funcionarios = [
    { nome: "João", cargo: "Desenvolvedor", salario: 5000 },
    { nome: "Maria", cargo: "Analista", salario: 4500 },
    { nome: "Pedro", cargo: "Gerente", salario: 7000 },
    { nome: "Ana", cargo: "Estagiária", salario: 1800 },
    { nome: "Lucas", cargo: "Programador", salario: 3800 }
];


// Listar funcionários
function listarFuncionarios(funcionarios) {
    console.log("=== FUNCIONÁRIOS ===");

    for (let i = 0; i < funcionarios.length; i++) {
        console.log(
            "Nome: " + funcionarios[i].nome +
            " | Cargo: " + funcionarios[i].cargo +
            " | Salário: R$ " + funcionarios[i].salario.toFixed(2)
        );
    }
}


// Calcular salário médio usando while
function calcularSalarioMedio(funcionarios) {
    if (funcionarios.length === 0) {
        return 0;
    }

    let soma = 0;
    let i = 0;

    while (i < funcionarios.length) {
        soma += funcionarios[i].salario;
        i++;
    }

    return soma / funcionarios.length;
}


// Encontrar maior e menor salário
function encontrarMaiorEMenorSalario(funcionarios) {
    if (funcionarios.length === 0) {
        console.log("Não existem funcionários cadastrados.");
        return;
    }

    let maior = funcionarios[0];
    let menor = funcionarios[0];

    for (let i = 1; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > maior.salario) {
            maior = funcionarios[i];
        }

        if (funcionarios[i].salario < menor.salario) {
            menor = funcionarios[i];
        }
    }

    console.log(
        "Maior salário: " + maior.nome +
        " - R$ " + maior.salario.toFixed(2)
    );

    console.log(
        "Menor salário: " + menor.nome +
        " - R$ " + menor.salario.toFixed(2)
    );
}


// Aplicar aumento percentual
function aplicarAumento(funcionarios, percentual) {
    if (percentual < 0) {
        console.log("O percentual não pode ser negativo.");
        return;
    }

    for (let i = 0; i < funcionarios.length; i++) {
        funcionarios[i].salario *= 1 + percentual / 100;
    }

    console.log("Aumento de " + percentual + "% aplicado.");
}


// Mostrar funcionários com salário acima da média
function listarAcimaDaMedia(funcionarios) {
    if (funcionarios.length === 0) {
        console.log("Não existem funcionários cadastrados.");
        return;
    }

    let media = calcularSalarioMedio(funcionarios);

    console.log("Salário médio: R$ " + media.toFixed(2));
    console.log("=== ACIMA DA MÉDIA ===");

    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > media) {
            console.log(
                funcionarios[i].nome +
                " - R$ " + funcionarios[i].salario.toFixed(2)
            );
        }
    }
}


// Executar o sistema

listarFuncionarios(funcionarios);

console.log(
    "Média salarial: R$ " +
    calcularSalarioMedio(funcionarios).toFixed(2)
);

encontrarMaiorEMenorSalario(funcionarios);

aplicarAumento(funcionarios, 10);

listarFuncionarios(funcionarios);

listarAcimaDaMedia(funcionarios);
