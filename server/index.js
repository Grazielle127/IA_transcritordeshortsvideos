import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express() //p usar exprss dentro da constante app
app.use(cors()) //usando cor dentro da app para habilitar a conexao entre front e back

app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  response.json({ result: "Download do vídeo realizado com sucesso!" })
}) // app.get significa qual acao q eu quero receber
//.json devolve como objeto

app.listen(3333, () => console.log("Server is runing on port 3333")) // metodo p inicializar o servidor,  definir o numero da porta, captar (escutando) as requisiçoes. o metodo vai ficar escutando as requisiçoes, e eu defino o num da porta q ele vai atender pelas requiciçoes que vao chegar no servidor.

// assim q o servidor iniciar vou pedir para executar uma função  () => Arrow functions é uma função anonima ou seja ela vai ser auto executavel, anonima pois nao tem nome, por ser assim () =>, funcao com nome ex:  function sum()
