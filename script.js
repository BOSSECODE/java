// console.log("Hello world!");

// let nome = "João";
// console.log(nome);

// const PI = 3.14;
// console.log(PI);

// let n1 = 1;
// let n2 = 2;

// console.log(n1 + n2);

// function saudacao() {
//     console.log("Olá, Meu nome é " + nome);
// };

// function somar(n3,n4){
//     console.log(n3 + n4);
// };

// saudacao();
// somar(1, 1);


function exercício_01(){
    
    let soma = 0;
    let continuar = true;

    while(continuar === true){
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para sair) :"));

        // soma = soma + numero;
        // soma += numero;

        if (isNaN(numero)) {
            alert("Por favor, digite um número válido!");
        } else {
            soma += numero;
            console.log(soma);
        }
        continuar = confirm("Deseja adicionar mais um número?");
    }
    alert("A soma dos numeros é : " + soma);
}
exercício_01();