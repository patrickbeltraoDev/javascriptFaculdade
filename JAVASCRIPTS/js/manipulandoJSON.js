// ENVIANDO DADOS JSON

//Cria um objeto Javacript
var objetoJS = {agencia: "5678-9", tipo: "física", nome: "Maria José", numero: "222.222-22"};

//CONVERTENDO O OBJETO JAVASCRIPT EM JSON
var textoJson = JSON.stringify(objetoJS);

//Redireciona a página para o endereço especificado, passando, via GET, o texto JSON
window.location = "processa/json/?conta=" + textoJson;
