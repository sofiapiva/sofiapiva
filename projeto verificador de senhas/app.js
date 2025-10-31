function verificarSenha(){
    let senha = document.getElementById ('senha').value;
    let resposta = document.getElementById ('resposta');

if ( senha.length <= 0){
        resposta.innerText = 'Sua senha deve ter pelo menos 1 caractere.';
       }
    else if (senha.length < 8 || senha.length > 15){
       resposta.innerText = 'Sua senha deve ter entre 8 e 15 carácteres.';
       } else if (!/[^a-zA-Z0-9 ]/.test(senha)) {
        resposta.innerText = 'Sua senha deve conter pelo menos um caractere especial.';
} else {
    resposta.innerText = 'Senha válida.'
}
    }
      function reiniciaTudo(){
        let senha = document.getElementById ('senha').value = '';
        let resposta = document.getElementById ('resposta').textContent = '';
      }
    
