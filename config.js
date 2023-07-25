import mysql from "mysql";
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin@123',
  database: 'prac',
});
pool.connect((err)=>{
    if(err){
        console.warn("error connecting",err);
    }
});

export { pool}
