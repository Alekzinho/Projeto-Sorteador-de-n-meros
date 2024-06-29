function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);   

    let sorteados = [];
    let numero;

    if (de > ate) {
        alert("Ops, o valor mínimo ultrapassou o valor máximo. Por favor, tente novamente.");
        reiniciar();
        return;
    }
    
    if (quantidade > (ate - de + 1)){
        alert("Ops, a quantidade esta maior do que deveria. Por favor, tente novamente.");
        reiniciar();
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let numero = gerarNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
        numero = gerarNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>
                </div>`;
    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);

}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>
                </div>`;
    alterarStatusBotao();
}