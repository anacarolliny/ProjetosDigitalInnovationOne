const http = require("http")
const host = "http://localhost"
const port = 3000
const stats = require("./pcRamUsage")


http.createServer((req, res) =>{
    let url = req.url
    if(url === "/stats"){
            res.end(JSON.stringify(stats, null, 2))
        }else{
            res.end("<h1> Seja bem vinde </h1> Clique aqui para encontrar a rota secreta <button onclick=window.location.href='/stats'>Clique Aqui</button> ")
           
        }
    
    
   
}).listen(3000, () => console.log(`Servidor rodando na porta ${host}:${port}`))