function exercício_02(){

 let contagem = 10;
    
    const intervalo = setInterval(() =>{
        console.log(contagem);

        if (contagem === 0){
            clearInterval(intervalo);
            console.log("Lançado");
            return;
        }

        contagem--;
    }, 1000);
}
exercício_02();