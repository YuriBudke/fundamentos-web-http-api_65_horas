let idade = 19

if(idade>= 18){
    console.log("Maior de Idade")
} else {
    console.log("Menor de Idade")
}


for (let i = 1; i <= 10; i++) {
  console.log(i);
}


for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}


function classificarNota(media) {
  if (media >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}


let contador = 10;
while (contador >= 0) {
  console.log(contador);
  contador--;
}

