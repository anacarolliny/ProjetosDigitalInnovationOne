import { StatusCodes } from 'http-status-codes';
import { NextFunction, Router, Request, Response } from "express";
import VehiclesRepository from "../repositories/vehicles.repository";

const vehiclesRoute = Router()

vehiclesRoute.post("/vehicles", async (req:Request, res:Response, next:NextFunction) =>{
  const vehicles = req.body
  const newVehicles = await VehiclesRepository.createVehicles(vehicles)
  res.status(StatusCodes.CREATED).send(newVehicles)
})

vehiclesRoute.get("/vehicles", async (req:Request, res:Response, next:NextFunction) =>{
  const vehicles = await VehiclesRepository.findAllVehicles()
  res.status(StatusCodes.OK).send(vehicles)
})

vehiclesRoute.get("/vehicles/:uuid", async (req:Request<{ uuid: string }>, res:Response, next:NextFunction) =>{
  const uuid = req.params.uuid
  const vehicles = await VehiclesRepository.findByUuid(uuid)
  res.status(StatusCodes.OK).send(vehicles)
})

vehiclesRoute.put("/vehicles/:uuid", async (req:Request<{ uuid: string }>, res:Response, next:NextFunction) =>{
  const uuid = req.params.uuid
  const vehicles = req.body
  const modifiedVehicles = await VehiclesRepository.updateVehicles(uuid, vehicles)
  res.status(StatusCodes.OK).send(modifiedVehicles)
})
vehiclesRoute.delete("/vehicles/:uuid", async (req:Request<{ uuid: string }>, res:Response, next:NextFunction) =>{
  const uuid = req.params.uuid
  await VehiclesRepository.deleteVehicles(uuid)
  res.sendStatus(StatusCodes.OK)
})
export default vehiclesRoute