const key = "cde06bbbdc392378e90766a04b00686c";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


// função para buscar a cidade na Api
// async para avisar que está acessando um servidor
async function buscarCidade(cidade) {

    // espera até o servidor responder
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}



function cliqueiNoBotao() {
    // procura o conteudo pela classe
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade)

}