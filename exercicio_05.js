function exercício_05(){
        let numero = parseInt(prompt("Digite um número inteiro:"));

    if(numero % 2 === 0){
        console.log("O número é par.");
        numero = numero + 1; // transforma em ímpar
    }else{
        console.log("O número é ímpar.");
        numero = numero + 1; // transforma em par
    }

    console.log("Valor final: " + numero);
}

exercício_05();
