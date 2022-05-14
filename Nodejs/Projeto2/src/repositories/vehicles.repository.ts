import db from "../db";
import Vehicles from "../models/vehicles.model";



class VehiclesRepository{
  async createVehicles(vehicles:Vehicles):Promise<string>{ 
  const script = `INSERT INTO application_vehicles (model,age,description) 
  VALUES ($1,$2,$3) RETURNING uuid`;

  const values = [vehicles.model,vehicles.age,vehicles.description]
  const {rows} = await db.query<{uuid:string}>(script, values)
  const [newVehicles] = rows
  return newVehicles.uuid
}

async findAllVehicles():Promise<Vehicles[]>{
  const script = `SELECT uuid,model,age,description FROM application_vehicles `
  const {rows} = await db.query<Vehicles>(script)
  return rows || []

}

async findByUuid(uuid:string):Promise<Vehicles>{
  const script = `SELECT uuid,model,age,description FROM application_vehicles WHERE uuid = $1`
  const values = [uuid]
  const {rows} = await db.query<Vehicles>(script,values)
  const [vehicle] = rows
  return vehicle
}

async updateVehicles(uuid:string,vehicle:Vehicles):Promise<Vehicles>{
  const script = `UPDATE application_vehicles SET model = $1, age = $2, description = $3 WHERE uuid = $4 RETURNING uuid`;
  const values = [vehicle.model,vehicle.age,vehicle.description,uuid]
  const {rows} = await db.query<Vehicles>(script,values)
  const [vehicleModified] = rows
  return vehicleModified
}

async deleteVehicle(uuid:string):Promise<void>{
  const script = `DELETE FROM application_vehicles WHERE uuid = $1`
  const values = [uuid]
  await db.query(script,values)
}

}
export default new VehiclesRepository()