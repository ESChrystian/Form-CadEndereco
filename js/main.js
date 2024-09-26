'use strict'; // Modo restrito

// Este metódo faz com que o JavaScript opere de forma mais segura e rigorosa,
// Consumo de API - https://viacep.com.br/

// Função para limpar formulário
const limparFormulario = ()=> {
    document.getElementById("lougradouro").value = ""; //Rua
    document.getElementById("cidade").value = ""; //C
    document.getElementById("Uf").value = ""; //E
    document.getElementById("bairro").value = ""; // P  
    
}
// cria regra de expressão regular (Regex) para testar o valor informado pelo usuário
const eNumero = (numero) => /^[0-9] + $/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);
// length é uma propriedade que verifica a quantidade de caracteres do argumento cep

// Função de preenchimento de formulário com os dados de cep, buscado da API
const preencherFormulario = (endereco) => {
    document.getElementById('lougradouro').value = endereco.lougradouro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('Uf').value = endereco.Uf;
    document.getElementById('bairro').value = endereco.bairro;
}  


