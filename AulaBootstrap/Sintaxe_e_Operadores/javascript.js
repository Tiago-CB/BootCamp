function comparar(valor1,valor2) {
   const frase1 = primeiraFrase(valor1,valor2);
   const frase2 = segundaFrase(valor1,valor2);
return `${frase1}${frase2}`;
};
let res= comparar;

function primeiraFrase(valor1,valor2) {
   let saoIguais = '';
   if(valor1 !==valor2) {
      saoIguais = 'não';
   }
   
   return `Os numeros ${valor1} e ${valor2} ${saoIguais} são iguais.`
};

function segundaFrase(valor1,valor2) {
 const soma = valor1+valor2;
 let resultado10 = 'menor';
 let resultado20 = 'menor';
 const comp10 = soma > 10;
 const comp20 = soma > 20;

 if(comp10){
   resultado10 = 'maior'
 }
 if(comp20){
   resultado20 = 'maior'
 }
 return `Sua soma é ${soma}, que é ${resultado10} que 10 e 
 ${resultado20} que 20.`
};

console.log(comparar(7,17));