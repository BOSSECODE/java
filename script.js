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



function exercício_02(){

    let contador = 10;
    let continuar = true;

    while(continuar === true && contador >= 0){

        console.log(contador);
        alert("Contagem: " + contador);

        contador--;
    }

    alert("Lançamento realizado!");
}

exercício_02();


function exercício_03(){

    let mes = 1;
    let ganhoAnual = 0;
    let gastoAnual = 0;

    while(mes <= 12){

        let ganho = parseFloat(prompt("Digite o ganho bruto do mês " + mes + ":"));
        let gasto = parseFloat(prompt("Digite os gastos do mês " + mes + ":"));

        ganhoAnual += ganho;
        gastoAnual += gasto;

        mes++;
    }

    let saldo = ganhoAnual - gastoAnual;

    alert("Ganho bruto anual: " + ganhoAnual);
    alert("Gasto anual: " + gastoAnual);
    alert("Saldo financeiro anual: " + saldo);

    if(saldo > 0){
        alert("A empresa teve Lucro.");
    }else if(saldo < 0){
        alert("A empresa teve Prejuízo.");
    }else{
        alert("A empresa terminou o ano sem lucro nem prejuízo.");
    }
}

exercício_03();


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



function exercício_06(){
 let letra = prompt("Digite uma letra do alfabeto:");

    letra = letra.toLowerCase();

    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        console.log("A letra é uma vogal.");
    }else{
        console.log("A letra é uma consoante.");
    }

}

exercício_06();


function exercício_07(){
        let codigo = prompt("Digite o código do sabor (a até i):");
    codigo = codigo.toLowerCase();

    if(codigo === "a"){
        console.log("Sabor: Chocolate - Preço: R$ 1,50");
    }else if(codigo === "b"){
        console.log("Sabor: Morango - Preço: R$ 2,50");
    }else if(codigo === "c"){
        console.log("Sabor: Creme - Preço: R$ 2,50");
    }else if(codigo === "d"){
        console.log("Sabor: Manga - Preço: R$ 3,20");
    }else if(codigo === "e"){
        console.log("Sabor: Melancia - Preço: R$ 3,40");
    }else if(codigo === "f"){
        console.log("Sabor: Vanilla Ice - Preço: R$ 3,00");
    }else if(codigo === "g"){
        console.log("Sabor: Céu Azul - Preço: R$ 3,60");
    }else if(codigo === "h"){
        console.log("Sabor: Brownie - Preço: R$ 4,00");
    }else if(codigo === "i"){
        console.log("Sabor: Hawaiano - Preço: R$ 5,00");
    }else{
        console.log("Código inválido.");
    }

}

exercício_07();


function exercício_08(){
         let num1 = 5;
    let num2 = 3;

    let diferenca = num1 - num2;
    let resultado = (2 * num1) + (3 * num2);
    let multiplicacao = num1 * num2;

    console.log("Diferença entre as variáveis: " + diferenca);
    console.log("Dobro da primeira + triplo da segunda: " + resultado);
    console.log("Multiplicação das variáveis: " + multiplicacao);

}
exercício_08();

function exercício_09(){
           let num1 = 8;
    let num2 = 5;

    if(num1 > num2){
        console.log(num1);
        console.log(num2);
    }else{
        console.log(num2);
        console.log(num1);
    }
}

exercício_09();

function exercício_10(){

    let nome = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));

    let descontoINSS = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - descontoINSS;

    console.log("Nome do funcionário: " + nome);
    console.log("Salário bruto: R$ " + salarioBruto.toFixed(2));
    console.log("Desconto INSS (8%): R$ " + descontoINSS.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));

} 

exercício_10();

function exercício_11(){

    let salario = parseFloat(prompt("Digite o salário bruto:"));
    let taxa;
    
    if(salario <= 1000){
        taxa = 0.08;
    }else if(salario <= 1500){
        taxa = 0.085;
    }else{
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    let salarioLiquido = salario - desconto;

    console.log("Salário informado: R$ " + salario.toFixed(2));
    console.log("Taxa de desconto: " + (taxa * 100) + "%");
    console.log("Valor do desconto: R$ " + desconto.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));

}

exercício_11();