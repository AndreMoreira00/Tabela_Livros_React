import express from "express";
import cors from "cors";
import conteudo from "./conteudo.js";
import musicas from "./musicas.js";

const servidor = express();

servidor.use(cors());
servidor.use(express.json());

servidor.get("/", function(requisicao, resposta){
  resposta.json({ mensagem: "Olá Mundo!"})
})

servidor.get("/api", function(requisicao, resposta){
  resposta.status(200).json(conteudo)
})

servidor.get("/api", function(requisicao, resposta){
  resposta.status(200).json(musicas)
})


servidor.get("*", function(requisicao, resposta){
  resposta.sendStatus(404)
})

servidor.listen(4000, function(){
  console.log("SERVIDOR EM FUNCIONAMENTO!");
  console.log("http://localhost:4000/")

})