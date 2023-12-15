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
        res.status(201).json(`http://localhost:5577/files/${req.file?.filename}`)
    } catch (error) {
        console.log(error)
        res.status(500).json('Erro interno o Servidor.')
    }
})

router.get('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '..', '..', 'storage', 'uploads', filename);
    res.status(200).sendfile(filePath)
});

export default router