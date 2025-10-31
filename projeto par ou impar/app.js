let cores = document.getElementById('muda');

function imparpar() {
  let geraNumero = parseInt(Math.random() * 100 + 1);
  const divall = document.getElementById('all');
  const exibir = document.getElementById('exibir');
  exibir.innerHTML = geraNumero
  if (geraNumero % 2 === 0) {
    divall.style.backgroundColor = 'blue';
  } else {
    divall.style.backgroundColor = 'red';
  }
  
}

function voltar() {
  const divall = document.getElementById('all');
  divall.style.backgroundColor = '#fff';
  exibir.innerHTML = "";
}
   