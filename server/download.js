import ytdl from "ytdl-core"
import fs from "fs"
//fs serve para manipular os arquivos

export const download = (videoId) =>
  new Promise((resolve, reject) => { // prometendo devolver a resposta positiva ou negativa
    // export serve p permitir o uso da funçao, em outros lugares

    const videoURL = "https://www.youtube.com/shorts/" + videoId
    console.log("Realizando o Download do vídeo: " + videoId)

    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
      .on(
        "info", //validaçaõ p saber se é um short video
        (info) => {
          const seconds = info.formats[0].approxDurationMs / 1000
          console.log(seconds)
          //console.log(info)

          if (seconds > 60) {
            throw new Error("A duração desse vídeo é maior que 60 segundos.")
          }
        }
      )
      .on("end", () => { //termina o download
        console.log("Download do vídeo finalizado.")
        resolve()
      })
      .on("error", (error) => {
        console.log(
          "Não foi possível fazer o download do vídeo. Detalhes do erro:",
          error
        )
        reject(error)
      })
      .pipe(fs.createWriteStream("./tmp/audio.mp4")) // salva o arq
  })
//parametro uma variavel q recebe um valor temporario para se utilizada dentro da funcao e para a funcao
// metodo pipe serve para recuperar a inf e salvar, ou seja ele vai salvar o video
