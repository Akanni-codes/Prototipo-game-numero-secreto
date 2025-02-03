alert('Seja bem vindo ao jogo do numero secreto');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let palpite;
let tentativas = 1 ;
while (palpite != numeroSecreto){
   palpite = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

if (palpite == numeroSecreto) {
   break
} else {
    if (palpite > numeroSecreto) {
         alert (`O numero secreto é menor que ${palpite} , tentativa ${tentativas}`); 
        } else {
            alert(`O numero secreto é maior que ${palpite} , tentativa ${tentativas}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
alert( `Uau !! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} !!` );