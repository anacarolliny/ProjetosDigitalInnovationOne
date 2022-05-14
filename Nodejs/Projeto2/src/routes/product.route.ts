import { Response, Request, NextFunction, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import productRepository from '../repositories/product.repository';
const productRoute = Router()



productRoute.post("/products", async (req: Request, res: Response, next: NextFunction) => {
    const product = req.body
    console.log("Post Inserido : ", req.body);
    const newProduct = await productRepository.createProduct(product)
        //const newUser = req.body
    //console.log(req.body);
    res.status(StatusCodes.CREATED).send(newProduct)

})
productRoute.get("/products",async (req: Request, res: Response, next: NextFunction) => {
  const products = await productRepository.findAllProducts()
  res.status(StatusCodes.OK).send(products)
})
productRoute.get("/products/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  const product = await productRepository.findByUuid(uuid)
  //bancoDeDados.getUserByYYud(uuid) se tivesse banco de dados
  res.status(200).send(product)
})
productRoute.put("/products/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  const product = req.body
  const modifiedProduct = await productRepository.updateProduct(uuid, product)
  res.status(StatusCodes.OK).send(modifiedProduct)
})
productRoute.delete("/products/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  await productRepository.deleteProduct(uuid)
  res.sendStatus(StatusCodes.OK)
})
export default productRoute
