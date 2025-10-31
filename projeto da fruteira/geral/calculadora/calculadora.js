function calcularDesconto(){
 const fruta = document.getElementById('fruta').value;
 const kg = document.getElementById('kg').value;
 const resultado = document.getElementById('resultado');
// document.getElementById('botao').style.display='flex' 

let vlrMaca;
let vlrMorango;

if (fruta === 'MC' && Number(kg) <= 5) {
  vlrMaca = 2.5
} else {
  vlrMaca = 2.2
}

if (fruta === 'MO' && Number(kg) <= 5) {
  vlrMorango = 1.8
} else {
  vlrMorango = 1.5
}

const totalMaca = vlrMaca * kg;
const totalMorango = vlrMorango * kg;

let total = totalMaca + totalMorango


if (kg >= 8 || total > 25) {
  total = total * 0.9
  // para descontos faz a porcentagem do desconto retirada de 100, por exemplo 0.9 (-10%), já se fosse o caso de somar
  // seria 1.10 por exemlpo, faz mais o %, e no codigo para fazer essa conta fazemos * 0.9 como no exemlplo, mas dai de acordo 
  // com a sua conta e oque ela desconta ou soma; - refazer essa explicação kkkk
}



}    
function reiniciar(){
    document.getElementById('fruta').value = '';
    document.getElementById('kg').value = '';
    document.getElementById('resultado').value = '';
   
}