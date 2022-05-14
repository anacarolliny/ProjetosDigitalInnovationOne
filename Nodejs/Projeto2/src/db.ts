import { Pool } from "pg";

const connectionString = "postgres://tylyfxsg:lmLFd2gP5nxJCm_D0g34XAZy5w5SV73w@kesavan.db.elephantsql.com/tylyfxsg";
const db = new Pool({connectionString})


export default db;