import * as express from "express"
import router from "./routes/Router"
import * as path from 'path';

const app = express()

// Enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json())

app.use('/storage', express.static(path.join(__dirname, 'storage')));

app.use(router)

const server = app.listen(5577, ()=>{
    console.log(server.address())
})



