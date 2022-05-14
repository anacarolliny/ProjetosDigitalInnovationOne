import db from "../db";
import DatabaseError from "../models/errors/database.error.model";
import User from "../models/user.model";




class UserRepository{
    async findAllUsers(): Promise<User[]>{
      
      const query = `SELECT uuid,username FROM application_user`;
      const {rows} =  await db.query<User>(query)
      return rows || []
    }
    async findByUuid(uuid: string): Promise<User>{
    try {
    
      const query = `SELECT uuid,username FROM application_user WHERE uuid = $1`;
      
      const values = [uuid]
      const {rows} =  await db.query<User>(query, values)
      const [user] = rows
      return user
    }  
     catch (error) {
  throw new DatabaseError("Erro na consulta por ID", error)
 }
     
  }
    
    async createUser(user: User): Promise<string>{
      const script = `INSERT INTO application_user (username,password) 
      VALUES ($1,crypt($2,'my_salt')) RETURNING uuid`;
      
      
      const values = [user.username,user.password]
      const {rows} = await db.query<{uuid:string}>(script, values)
      const [newUser] = rows
      return newUser.uuid
    }

    async updateUser(uuid: string, user: User): Promise<User>{
      const script = `UPDATE application_user SET username = $1, password = $2 WHERE uuid = $3 RETURNING uuid`;
      const values = [user.username,user.password,uuid]
      const {rows} = await db.query<User>(script, values)
      const [modifiedUser] = rows
      return modifiedUser
    }

    async deleteUser(uuid: string): Promise<void>{
      const script = `DELETE FROM application_user WHERE uuid = $1`;
      const values = [uuid]
      await db.query(script, values)
    }
}

export default new UserRepository();