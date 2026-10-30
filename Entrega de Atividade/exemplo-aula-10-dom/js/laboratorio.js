// Esta mensagem confirma que o arquivo foi carregado e executado.
console.log("JavaScript conectado ao laboratório!");

// Busca o elemento cujo atributo id é "titulo".
// Não colocamos #, pois este método já recebe especificamente um ID.
const titulo = document.getElementById("titulo");

// Exibe o elemento encontrado, não apenas seu texto.
console.log(titulo);

// Modifica o texto do elemento encontrado.
titulo.textContent = "Bem-vindo à casa interativa!";

