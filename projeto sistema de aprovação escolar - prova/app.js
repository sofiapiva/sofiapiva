function avaliação(){
        let nota = document.getElementById("nota").value;
        let frequencia = document.getElementById("frequência").value;

        if (nota >= 7 && frequencia >= 75) 
            document.getElementById("resultado").innerHTML = "Você foi aprovado";
  
else if (nota < 7 && frequencia < 75) {
    document.getElementById("resultado").innerHTML = "Você foi reprovado"; 
}
     if (nota >= 7 && frequencia < 75) {
        document.getElementById("resultado").innerHTML = "Você foi reprovado por falta";
     }
        if (nota < 7 && frequencia >= 75) {
            document.getElementById("resultado").innerHTML = "Você foi reprovado por nota";
        }
}

function reiniciar(){
    document.getElementById("nota").value = "";
    document.getElementById("frequência").value = "";
    document.getElementById("resultado").innerHTML = "";
}

//  a função irá pegar o valor colocado pelo usuario, relacionado a nota dele e a frequência;
// irá verificar se a nota e a frequência estão dentro dos parâmetros estabelecidos;
// e irá mostrar o resultado para o usuario.
// e a function reiniciar, é ligada a um botão inserido no html, que após clicado ele irá puxar esssa função;
// e irá limpar os campos de entrada e o resultado, para que o usuario possa recomeçar o processo.
