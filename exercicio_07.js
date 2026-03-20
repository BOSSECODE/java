function exercício_07(){
        let codigo = prompt("Digite o código do picolé (a-i):");
            switch(codigo){
                case "a":
                    console.log("Sabor: Chocolate - Preço: R$ 1,50");
                    break;
                case "b":
                    console.log("Sabor: Morango - Preço: R$ 2,50");
                    break;
                case "c":
                    console.log("Sabor: Creme - Preço: R$ 2,50");
                    break;
                case "d":
                    console.log("Sabor: Manga - Preço: R$ 3,20");
                    break;
                case "e":
                    console.log("Sabor: Melancia - Preço: R$ 3,40");
                    break;
                case "f":
                    console.log("Sabor: Vanilla Ice - Preço: R$ 3,00");
                    break;
                case "g":
                    console.log("Sabor: Céu Azul - Preço: R$ 3,60");
                    break;
                case "h":
                    console.log("Sabor: Brownie - Preço: R$ 4,00");
                    break;
                case "i":
                    console.log("Sabor: Hawaiano - Preço: R$ 5,00");
                    break;
                default:
                    console.log("Código inválido.");
            }
        }

exercício_07();