import React, { useState, useEffect } from "react";
import Titulo from "./components/Titulo";
import Campo from "./components/Campo";
import Conteudo from "./components/Conteudo";
import axios from 'axios';
import Musica from "./components/Conteudo";

export default function Inicio(){

  const [codigos, definirCodigos] = useState([])
  const [conteudos, definirConteudos] = useState({})
  
  useEffect(function(){
    axios.get("http://localhost:4000/api").then(function(resposta) {
      const dados = resposta.data
      const lista = Object.keys(dados)
      definirCodigos(lista)
      definirConteudos(dados)
    }).catch(function(erro){
      console.log(erro)
    })
  })
    
  return <>

    <Titulo nome="André" imagem="perfil.png"/>

    <Campo>
      {
        codigos.map(function(codigo){
          return <Conteudo
          key = { codigo }
          capa = { conteudos[codigo].capa }
          titulo = { conteudos[codigo].titulo }
          genero = {conteudos[codigo].genero }
          ano = { conteudos[codigo].ano }
          autor = { conteudos[codigo].autor }
          />
        })
      }
      
      {
        codigos.map(function(codigo){
          return <Conteudo
          key = {codigo}
          imagem = { Musica[codigo].imagem}
          nome = { Musica[codigo].nome}
          compositor = { Musica[codigo].compositor}
          lancamento = { Musica[codigo].lancamento}
          />
        })
      }
    </Campo>
  </>
}