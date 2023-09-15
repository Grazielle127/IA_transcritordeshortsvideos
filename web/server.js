import axios from "axios" //serve para fzr a conexao do front com o back

export const server = axios.create({ //requisicao para o servidor
  baseURL: "http://localhost:3333",  
})
// o base url é a parte do endereço q ira se repetir para tds requisiçoes, que e tambem o endereço do servidor