  const mysql = require('mysql2');
  const connection = mysql.createConnection({ //ใช้ล่าสุด
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  })

  export default function handler(req, res) {
    const { id } = req.query

  if (req.metthod === "DELETE" ) {
    try{
      const results = connection.query("DELETE FROM tbl_users WHERE id = ?", [req.query.id]);
      return res.status(200).json({...req.body, id:results.insertId});
        }catch (error) {
      return res.status(500).json({message: error.message});
     }
  }else{

  }


  connection.query(
    'SELECT * FROM `tbl_users` WHERE id = ?', [id],
    function(err, results,) {
      console.log(results); 
      res.status(200).json({users:results});
    }
  );
}



// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'db_users'
//   });
