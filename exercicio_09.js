function exercício_09(){
       let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    console.log("Primeiro número digitado:", num1);

    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
    console.log("Segundo número digitado:", num2);

    if (num1 > num2) {
        console.log("Ordem do maior para o menor:", num1, ",", num2);
    } else {
        console.log("Ordem do maior para o menor:", num2, ",", num1);
    }

}

exercício_09();
