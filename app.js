function sortear() {

    //Obtendo Ids e seus valores
let quantidade = parseInt(document.getElementById("quantidade").value.trim());
let de = parseInt(document.getElementById("de").value.trim());
let ate = parseInt(document.getElementById("ate").value.trim());
const mensagem = document.getElementById("mensagem");

let numerosSorteados = [];

//Predefinindo valores
if (isNaN(de)) {
    de = 0;
    document.getElementById("de").value = 0;
     
}

if (isNaN(quantidade)) {
    quantidade = 1;
    document.getElementById("quantidade").value = 1;
}

if (isNaN(ate)) {
    ate = 10;
    document.getElementById("ate").value = 10;
}

//Sorteando números 
if (de > ate || quantidade == 0 || ate == 0) {
    alert("Preenchimento inválido!");
} else {
    let i = 0;
for (i = 0; i < quantidade; i++) {
    let numeroAleatorio = gerarNumeroAleatorio(de, ate);

    while (numerosSorteados.includes(numeroAleatorio) == true) {
       numeroAleatorio =  gerarNumeroAleatorio(de,ate);
    }
    numerosSorteados.push(numeroAleatorio)
    mensagem.textContent = `Números sorteados: ${numerosSorteados}.`
}

console.log(numerosSorteados, de, ate, quantidade);
}

alterarBotaoReiniciar();

}

function gerarNumeroAleatorio(min,max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function alterarBotaoReiniciar() {
    const botao = document.getElementById("btn-reiniciar");

    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

function reiniciar()  {
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.classList.remove("container__botao");
    botaoReiniciar.classList.add("container__botao-desabilitado");

    document.getElementById("quantidade").value = "";
    document.getElementById("de").value =  "";
    document.getElementById("ate").value = "";
    document.getElementById("mensagem").textContent = "Números sorteados:  nenhum até agora";

}