function exercício_04() {

    let numero = []
    
    for(let i = 0; i < 4; i++){
        let nuberUs = parseFloat(prompt("Digite um numero:"))
        
        if(!isNaN(nuberUs)){
            numero.push(nuberUs);
        }
    }

    let orderNumber = [...numero].sort((a, b) => b-a);
    console.log('Numeros organizados: ' + orderNumber);
}
exercício_04();