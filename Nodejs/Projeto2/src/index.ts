import express from "express"
import errorHandler from "./niddlewares/error-handler.middleware"
import productRoute from "./routes/product.route"
import StatusRoute from "./routes/status.route"
import usersRoute from "./routes/users.route"
const app = express()


//Configurações da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Configuração de Rotas
app.use(usersRoute)
app.use(productRoute)
app.use(StatusRoute)

//Configuração dos Handlers de Erro
app.use(errorHandler)

//Inicialização do servidor
app.listen(3000, () => {
    console.log("Executando o servidor na porta 3000");

})


