import {server} from "./server.js"

const form = document.querySelector("#form") // uma pagina html tem uma hierarquia de seus elementos o que representa o DOM
const input = document.querySelector("#url")

const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {  //funcao async quando tem alguema etapa do codigo q deseja que espere
  // evento de submit quando o usuario aperta o play
  event.preventDefault() //para prevenir o comportamento padrao do navegador, fazendo com que nao recaregue a pagina e fique no console

  const videoURL = input.value // para recurar o valor do input a URL
  // console.log("URL DO VÍDEO: ", videoURL)

  if (!videoURL.includes("shorts")) { // para verificar se o video é um short
    //metodo includes serve para saber se tal coisa esta inclusa
    //console.log("Esse vídeo não parece ser um short ")
    return (content.textContent = "Esse vídeo não parece ser um short.")
  }
  //obter o id do video 
  const [_, params] = videoURL.split("/shorts/") //split divide o texto, separa em duas o q vem antes e dps de shorts ex: https://www.youtube.com/    shorts    /TFGAMLL68CA
  const [videoID] = params.split("?si") //para limpar o resto de caracteres para so ter o id, a primeira posição
  //console.log(videoID)

  content.textContent ="Obtendo o texto do áudio..."

  const transcription = await server.get("/summary/" + videoID) // para baixar o video com await ira aguardar o finalizamento da etapa

  content.textContent =  transcription.data.result


})
