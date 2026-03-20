function exercício_06(){
 let letra = prompt("Digite uma letra do alfabeto:");

    letra = letra.toLowerCase();

    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        console.log("A letra é uma vogal.");
    }else{
        console.log("A letra é uma consoante.");
    }

}