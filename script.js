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
somarnumeros();



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

lancamentoFoguete();


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

balancoEmpresa();


function exercício_05(){

}


function exercício_06(){

}


function exercício_07(){

}



function exercício_08(){

}


function exercício_09(){

}


function exercício_10(){

}   


function exercício_11(){

}