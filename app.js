alert('Olá Mundo');
let numeroMaximo = 30;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

 

// parseInt = Transforma o numero em inteiro, ignorando numeros após 0 ponto.
// Math.random = Gera um numero pseudo aleatorio maior que 0 menor que 1. Ex : 0.988 
while (chute != numeroSecreto) {
chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); 
    if (chute == numeroSecreto) {
        break;
     } else {
        
        if (chute > numeroSecreto){
            alert(`O numero secreto é menor do que ${chute}`);
        }else {
            alert(`O numero secreto é maior do que ${chute}`);
        }        
        tentativas ++
     }
}

// Operador ternário: ex:
// Tentativas é maior que um ? Se sim, a variável é'tentativa', senão, a variavel é 'tentativas';

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Você acertou, o numero secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



