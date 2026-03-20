function exercício_10(){

    let nome = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));

    let desconto = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - desconto;

    console.log("Nome do funcionário: " + nome);
    console.log("Salário bruto: R$ " + salarioBruto.toFixed(2));
    console.log("Desconto INSS (8%): R$ " + desconto.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));

} 

exercício_10();