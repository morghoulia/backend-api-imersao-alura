import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
  
    const db = conexao.db("imersao-alura");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
  }

  export async function criarpost(novopost) {
    const db = conexao.db("imersao-alura");
    const colecao = db.collection("posts");
    return colecao.insertOne(novopost);
  }

  export async function atualizarpost(id, novopost) {
    const db = conexao.db("imersao-alura");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novopost}); 
  }