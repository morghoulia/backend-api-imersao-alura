import express from "express";
import multer from "multer";
import cors from "cors";
import { listarposts, postarnovopost, uploadimagem, atualizarnovopost} from "../controllers/postscontroller.js";

const corsOptions = {
    origin:"http://localhost:8000", 
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
app.use(express.json());
app.use(cors(corsOptions));
app.get("/posts", listarposts); 
app.post("/posts", postarnovopost);
app.post("/upload", upload.single("imagem"), uploadimagem);
app.put("/upload/:id", atualizarnovopost );
}

export default routes;
