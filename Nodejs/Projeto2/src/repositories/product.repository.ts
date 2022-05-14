import db from "../db";
import Product from "../models/product.model";


class ProductRepository{
  async createProduct(product: Product): Promise<string>{
    const script = `INSERT INTO application_product (name,price) 
    VALUES ($1,$2) RETURNING uuid`;
    
    
    const values = [product.name,product.price]
    const {rows} = await db.query<{uuid:string}>(script, values)
    const [newProduct] = rows
    return newProduct.uuid
  }

  async findAllProducts():Promise<Product[]>{
    const query = `SELECT uuid,name,price FROM application_product`;
        const {rows} =  await db.query<Product>(query)
    return rows || []
  }

  async findByUuid(uuid: string): Promise<Product>{
    const query = `SELECT uuid,name,price FROM application_product WHERE uuid = $1`;
    
    const values = [uuid]
    const {rows} =  await db.query<Product>(query, values)
    const [product] = rows
    return product
  }

  async updateProduct(uuid: string, product: Product): Promise<Product>{
    const script = `UPDATE application_product SET name = $1, price = $2 WHERE uuid = $3 RETURNING uuid`;
    const values = [product.name,product.price,uuid]
    const {rows} = await db.query<Product>(script, values)
    const [modifiedProduct] = rows
    return modifiedProduct
  }

  async deleteProduct(uuid: string): Promise<void>{
    const script = `DELETE FROM application_product WHERE uuid = $1`;
    const values = [uuid]
    await db.query(script, values)
  }
}

export default new ProductRepository();