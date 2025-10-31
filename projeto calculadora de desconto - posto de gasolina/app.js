function calcularDesconto() {
    let combustivel = document.getElementById("combustivel").value;
    let litros = document.getElementById("litros").value;
    let resultado = document.getElementById("resultado");
    console.log(combustivel);
    console.log(litros);
     document.getElementById('botao').style.display='flex';
     document.getElementById('botao2').style.display='none';

    let total;
    // declara o nome da variavel antes do if e else, assim é só alterar o valor da variavel em qualquer lugar do código;
    if (combustivel === 'G' && litros > 20) {
        total = (litros * 2.5) * 0.94
        resultado.innerText = `O valor total com o desconto é de R$ ${total.toFixed(2)}`;
    } else if (combustivel === 'G' && litros <= 20) {
        total = (litros * 2.5) * 0.92      
          resultado.innerText = `O valor total com o desconto é de R$ ${total.toFixed(2)}`;
    } if (combustivel === 'A' && litros > 20) {
        total = (litros * 1.90) * 0.97;
        resultado.innerText = `O total com o desconto é de R$ ${total.toFixed(2)}`;
    } else if (combustivel === 'A' && litros <= 20) {
        total = (litros * 1.90) * 0.95;
        resultado.innerText = `O valor total com o desconto é de R$ ${total.toFixed(2)}`;
       } if (litros === '' && combustivel === '' || litros <= 0 || combustivel === '') {
        resultado.innerText = 'Preencha todos os campos!';
    } else if (combustivel === '') {
        resultado.innerText = 'Selecione uma opção de combustivel!'
    } else if (litros === ''|| litros <= 0) {
        resultado.innerText = 'Adicione o valor dos litros!';
    }
        } 

// a funcção toFixed é usado para arredondar o valor para duas casas decimais, ou a quantidade de casas que voce quiser, coloca entre parenteses ao lado da função;

function reiniciarBotao(){
    document.getElementById("resultado").innerText = "";
    // quando for um campo (um paragrafo por exemplo) é ".innerText", quando for imput ou select é ".value";
    document.getElementById("combustivel").value = "";
    document.getElementById("litros").value = "";
    document.getElementById('botao').style.display='none';
    document.getElementById('botao2').style.display='flex';
}       