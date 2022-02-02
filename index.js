const { parse } = require('path/posix');
const receita = require('./modules/receita');

function ValidarCPF(CPF) {
let Soma;
let Resto;
Soma = 0;
if (CPF == "00000000000") return false
//Primeiro Numero
for (i=1; i<=9; i++)
    Soma = Soma + parseInt(CPF.substring(i-1, i))* (11-i);
    Resto = (Soma * 10) % 11;
      if((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt(CPF.substring(9))) return false;
//Segundo Numero
Soma = 0;
for(i=0; i<=10; i++)
    Soma = Soma + parseInt(CPF.substring(i-1, i)) *(12-i);
    Resto = (Soma * 10) % 11;
      if((Resto == 10) || (Resto == 11)) resto = 0;
      if(Resto != parseInt(CPF.substring(10))) return false;
      return true;
};      

// Funcao princial
async function main()
{
    // Codigo aqui
    const cpf = '123.456.789-00';

   



    // Validação na receita aqui
    const result = await receita(cpf);
}


main();