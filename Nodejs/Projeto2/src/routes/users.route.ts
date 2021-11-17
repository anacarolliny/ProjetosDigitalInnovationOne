import { Response, Request, NextFunction, Router } from "express";
import { StatusCodes } from "http-status-codes"
const usersRoute = Router()

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: "Carol" }]
    res.status(StatusCodes.OK).send(users)
})

usersRoute.get("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    //bancoDeDados.getUserByYYud(uuid) se tivesse banco de dados
    res.status(200).send({ uuid })
})

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
    console.log("Post Inserido : ", req.body);
    const newUser = req.body
    //console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser)

})

usersRoute.put("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    const modifiedUser = req.body
    modifiedUser.uuid = uuid
    res.status(StatusCodes.OK).send({ modifiedUser })
})

usersRoute.delete("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    res.sendStatus(StatusCodes.OK)
})
export default usersRoute