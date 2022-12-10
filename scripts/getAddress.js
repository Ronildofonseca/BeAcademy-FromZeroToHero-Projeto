/**
 * getAddress.js
 *
 * Promises e try/catch (Formulário com requisição do via Cep)
 */

export async function getAddress(cep) {
    try {
      const mapa = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();
      const logradouro = document.querySelector(".logradouro");
      const bairro = document.querySelector(".bairro");
      const cidade = document.querySelector(".cidade");
  
      logradouro.value = mapa.logradouro;
      bairro.value = mapa.bairro;
      cidade.value = mapa.localidade;
    } catch (error) {
      throw new Error("Erro na requisição");
    }
  }