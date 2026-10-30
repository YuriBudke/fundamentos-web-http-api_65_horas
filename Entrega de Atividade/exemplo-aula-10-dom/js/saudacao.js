
function cumprimentar(){

    const nome = document.getElementById("nome").value.trim();

    const paragrafo = document.getElementById("saudacao");

    if(nome === ""){
        paragrafo.textContent = "Digite seu nome para continuar";
    } else {
        paragrafo.textContent = "Olá, " + nome + "! Que bom ter você aqui";
    }

}
