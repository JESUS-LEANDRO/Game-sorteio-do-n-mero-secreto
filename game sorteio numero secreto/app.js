alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

// se chute for igual ao número secreto

while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`)
    
    if (chute == numeroSecreto) {
        break;
    } else {
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
}
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa' ;
 alert(`Isso ai, você descobriu o número secreto que é ${numeroSecreto} com ${tentativas} ${palavraTentativas}`)
/* if(tentativas > 1){
    alert(`Parabéns você acertou ${numeroSecreto} com ${tentativas} tentativas.`);
} else{
    alert(`Parabéns você acertou ${numeroSecreto} com ${tentativas} tentativa.`);
}*/
