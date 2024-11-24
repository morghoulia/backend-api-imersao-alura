import {getTodosPosts, criarpost, atualizarpost} from "../models/postmodel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarposts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
  }

  export async function postarnovopost(req, res) {
    const novopost = req.body;
    try {
      const postcriado = await criarpost(novopost);
      res.status(200).json(postcriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"}) 
    }
  }

  export async function uploadimagem(req, res) {
    const novopost = {
      descricao: "",
      imgUrl: req.file.originalname,
      alt: ""
    };

    try {
      const postcriado = await criarpost(novopost);
      const imagematualizada = `uploads/${postcriado.insertedId}.png`;
      fs.renameSync(req.file.path, imagematualizada); 
      res.status(200).json(postcriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"}) 
    }
  }

  export async function atualizarnovopost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    
    try {
      const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
      const descricao = await gerarDescricaoComGemini(imgBuffer);

      const post = {
        imgUrl: urlImagem, 
        descricao: descricao,
        alt: req.body.alt
      }

      const postcriado = await atualizarpost(id, post);
      
      res.status(200).json(postcriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"}) 
    }
  }