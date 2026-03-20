function exercicio_03(){

    let ganhos = []
    let gastos = []
    let somaB = 0
    let somaG = 0

    for(let i = 0; i < 12; i++){

        let numeroB = parseFloat(prompt("Digite o ganho bruto:"))

        if(!isNaN(numeroB)){
            ganhos.push(numeroB);
            somaB += numeroB;
        } else{
            console.log("Número invalido");
            i--;
        }
    }

    for(let i = 0; i < 12; i++){

        let numeroG = parseFloat(prompt("Digite os gastos do meses:"))

        if(!isNaN(numeroG)){
            gastos.push(numeroG);
            somaG += numeroG;
        } else{
            console.log("Número invalido");
            i--;
        }
    }

    let saldo = somaB - somaG

    if(saldo > 0){
        console.log("Ganho bruto: " + somaB + 
            "Gastos anual: " + somaG +
            'saldo: ' + saldo +
            "Lucro");
    }else{
        console.log("Ganho bruto: " + somaB + 
            "Gastos anual: " + somaG +
            'saldo: ' + saldo +
            "Prejuízo");
    }

}
exercicio_03();
