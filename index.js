let numeroGerado = parseInt(Math.ramdom() * 100);
let tentativas = [];

numero.onchange = () => {
    if(tentativas.length < 10){
        if(tentativas.length > 0) {
            for(let i = 0; i < tentativas.length; i++) {
                if(tentativas[i] == numeroDigitado){
                    alert("este numero já foi digitado");
                    numero.value = '';
                    return;
                }
            }
        }
    tentativas.push(numeroDigitado);
    if(numeroDigitado > numeroGerado)
        alert('Bia está pensando em um numero menor');

    numero.value ='';
    palpites.innerHTML = tentativas.join('-');
    console.log(tentativas);
} else{
    alert("Acabou as tentativas")
}












// // while(tentativas <= 10){
// //     //verifica se é um número válido
// //     if(!/[0-9]/.test(Number(numero.value))){
// //         alert("Escreva um número válido");
// //         numero.value ='';
// //     }else;{
// //         tentativas++;
// //     }
    
}