function calcular() {
let valor = document.getElementById("valorProduto").value;
let resposta = document.getElementById("resposta");
let conta = 0;
if ( valor >= 100 ) {
conta = valor - (valor * (10 / 100));
resposta.innerText= `Valor final: R$${conta}`;
} else {
conta = valor - (valor * ( 5 / 100 ));
resposta.innerText = `Valor final: R$${conta}`;
}
}