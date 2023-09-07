const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'db_users'
//   });

const connection = mysql.createConnection({ //ใช้ล่าสุด
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  })

export default function handler(req, res) {
  const{ studentid, firstname, lastname, username, password, status} = req.body

  if (req.method === 'GET'){
    connection.query(
      'SELECT * FROM `tbl_users`',
      function(err, results) {
        res.status(200).json({users:results});
      }
    );

   } else if (req.method === 'POST') {
    try{
    const results = connection.query("INSERT INTO tbl_users SET ?",{
      studentid, firstname, lastname , username, password, status
    });
    return res.status(200).json({"status": "ok", "message": req.body,id:results.insertId});
      }catch (error) {
    return res.status(500).json({message: error.message});
   }


   } else if (req.method === 'PUT') {
    try{
    const results = connection.query("UPDATE tbl_users SET ? WHERE id = ?",[
      req.body,
      req.body.id,
   ]);
    return res.status(200).json({...req.body,id:results.insertId});
      }catch (error) {
    return res.status(500).json({message: error.message});
   }
    
   } else {
    try{
      const results = connection.query("DELETE FROM tbl_users WHERE id = ?", [req.query.id]);
      return res.status(200).json({...req.body, id:results.insertId});
        }catch (error) {
      return res.status(500).json({message: error.message});
     }
    }
}


//   export default function handler(req, res) {
  // connection.query(
  //   'SELECT * FROM `tbl_users`',
  //   function(err, results) {
  //     console.log(results); 
  //     res.status(200).json({users:results});
  //   }
  // );
// }   //ใช้ล่าสุด





// export default function handler(req, res) {
//     res.status(200).json([
//         { id: '1', fristname: 'Teerapong', lastname:'Akard', username:'Meteor', password:'123456',status:'admin'  },
//         { id: '2', fristname: 'ธีรพงษ์', lastname:'อุกอาจ', username:'Shiel', password:'123456',status:'user'  }
//     ])
//   }
  