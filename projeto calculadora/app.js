let visor = document.getElementById('visor')

function adicionarvalor(valor) {
    visor.value += valor;
}


function Calcular() {
    try {
        let resultado = eval(visor.value); 

        if (!isFinite(resultado)) { 
            alert('Erro: valor inválido!');
            visor.value = '';
        } else {
            visor.value = resultado; 
        }

    } catch (erro) {
        alert('Erro na expressão, tente novamente!');
        visor.value = '';
    }
}

function limpar() {
    visor.value = '';
}

function apagar() {
    visor.value = visor.value.slice(0, -1);
}





