import { Response, Request, NextFunction, Router } from "express";
import { StatusCodes } from "http-status-codes"
import DatabaseError from "../models/errors/database.error.model";
import userRepository from "../repositories/user.repository";
const usersRoute = Router()

usersRoute.get("/users", async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const users = await userRepository.findAllUsers()
        res.status(StatusCodes.OK).send(users)    
    } catch (error) {
       next(error)
    }
    
})

usersRoute.get("/users/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    const user = await userRepository.findByUuid(uuid)
    //bancoDeDados.getUserByYYud(uuid) se tivesse banco de dados
    res.status(200).send(user)
})

usersRoute.post("/users", async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body
    console.log("Post Inserido : ", req.body);
    const newUser = await userRepository.createUser(user)
        //const newUser = req.body
    //console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser)

})

usersRoute.put("/users/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    const user = req.body
    const modifiedUser = await userRepository.updateUser(uuid, user)
    res.status(StatusCodes.OK).send(modifiedUser)
})

usersRoute.delete("/users/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    await userRepository.deleteUser(uuid)
    res.sendStatus(StatusCodes.OK)
})
export default usersRoute