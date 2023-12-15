import { Router } from "express";

import uploads from "../utils/uploads";

import * as path from "path"
const router = Router()

router.get('/', (req, res)=>{
    res.send('Hello World')
})

router.post('/post', uploads.single('file'), (req, res)=>{
    try {
        console.log(req.body)
        res.status(201).json('Arquivo enviado com Sucesso')
    } catch (error) {
        console.log(error)
        res.status(500).json('Erro interno o Servidor.')
    }
})

router.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '..', '..', 'storage', 'uploads', filename);
    res.status(200).sendfile(filePath)
});

export default router