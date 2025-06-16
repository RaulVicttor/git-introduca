// Questão 1

// let idade = 17;
// if(idade >= 18){
//     console.log("Maior de idade");    
// }else{
//     console.log("Menor de idade");    
// }

// Quewstão 2

let numero = dois;

if (!numero) {
    console.log("Digite um valor válido");
    return;
}

if (typeof numero != "number") {
    console.log("Digite um número válido");   
    return; 
}

if(numero > 0){
    console.log(`${numero} é positvo`);  
}else if(numero < 0){
    console.log(`${numero} é negativo`);    
}else{
    console.log(`é zero`);    
}

