function calculaImc() {
  let altura = document.getElementById('altura').value;
  let peso = document.getElementById('peso').value;
  let resultado = document.getElementById('resultado')

  let IMC = peso / (altura * altura);
  console.log(IMC);

  if (altura === "") {
    resultado.innerText = "Preencha o campo da altura!";
  }

  if ( peso === "") {
    resultado.innerText = "Preencha o campo do peso!";
  }
  
  if (IMC < 18.5) {
    resultado.innerText = "magreza";
  } else if (IMC < 24.9) {
    resultado.innerText = "normal";
  } else if (IMC < 30) {
    resultado.innerText = "sobrepeso";
  } else if (IMC < 35) {
    resultado.innerText = "obesidade grau 1";
  } else if (IMC < 40) {
    resultado.innerText = "obesidade grau 2";
  }  else if (IMC > 40 ) {
    resultado.innerText = "obesidade grau 3";
  } 
  

  // Chama a função para limpar os campos
  limparCampos();
}

function limparCampos() {
  // Zera o valor dos inputs
  document.getElementById('altura').value = '';
  document.getElementById('peso').value = '';
}
