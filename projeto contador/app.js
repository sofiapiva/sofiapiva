function adicionarNumero() {
    let adc = document.getElementById('adc');
    let adcmais = Number(adc.textContent) + 1;
    adc.textContent = adcmais;
  }
  function tirarNumero() {
    let adn = document.getElementById('adc');
    let adcmenos = Number(adc.textContent) - 1;
    adc.textContent = adcmenos;
}

function zerar() {
    let adc = document.getElementById('adc');
    adc.textContent = "0";   
  }