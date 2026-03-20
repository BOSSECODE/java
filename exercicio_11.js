function exercício_11(){

    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
    let taxa= 0;

    if(salarioBruto <= 1000){
        taxa = 0.08;
    }else if(salarioBruto <= 1000){
        taxa = 0.5;
    }else{
        taxa = 0.09;
    }

    let desconto = salarioBruto * taxa;
    let salarioLiquido = salarioBruto - desconto;

    console.log("Salário bruto: R$ " + salarioBruto.toFixed(2));
    console.log("Desconto INSS (" + (taxa * 100) + "%): R$ " + desconto.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));

}

exercício_11();