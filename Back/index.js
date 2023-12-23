import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
//ici c pour parser all the json files recu du front
app.listen(3000,()=>
console.log('listening on port 3000..'))
app.use(express.urlencoded({extended: true}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cosycoffe'
  });
  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });

app.get('/' , (req,res)=>{
    res.send('<p> this is the backend </p>')
})

app.get('/Staff', (req, res) => {
    db.query('SELECT * FROM staff', (err,data) => {
      if (err) {
        console.error('Error retrieving staff data:', err);
        return res.status(500).send('Internal Server Error');
      } else {
       return res.json(data)
      }
    });
  });

  app.post("/AddingStaff", (req, res) => {
    const q = "INSERT INTO staff (`IdStaff`, `Name`, `Surname`, `age` ,`JOB` , `PhoneNumber`) VALUES (?)";
    const values = [
      req.body.IdStaff,
      req.body.Name,
      req.body.Surname,
      req.body.age,
      req.body.JOB,
      req.body.PhoneNumber
    ];
    console.log(req)
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.delete('/staff/:id' , (req,res) =>{
    const id = req.params.id;
    const q = "DELETE FROM staff WHERE IdStaff = ? "
    db.query(q,[id], (err,data)=>{
        if(err){return res.json(err)}
        else{
            return res.json('Book has been deleted successfully !')
            
        }
    })


  })

  app.put('/Staff/:id' , (req,res) =>{
    const id = req.params.id;
    const q = "UPDATE staff SET `IdStaff`= ?, `Name`= ?, `Surname`= ?, `age`= ?, `JOB`= ?, `PhoneNumber`= ? WHERE IdStaff = ?  "
    const values = [
        req.body.IdStaff,
        req.body.Name,
        req.body.Surname,
        req.body.age,
        req.body.JOB,
        req.body.PhoneNumber
      ];
      console.log(values)
      //...values all the values 
    db.query(q,[...values,id], (err,data)=>{
        if(err){return res.json(err)}
        else{
            return res.json('member has been updated successfully !')
            
        }
    })


  })

  app.get('/CoffeMenu', (req, res) => {
    db.query('SELECT * FROM cafe', (err,data) => {
      if (err) {
        console.error('Error retrieving cafe data:', err);
        return res.status(500).send('Internal Server Error');
      } else {
       return res.json(data)
      }
    });
  });

  app.post("/AddingCafe", (req, res) => {
    const q = "INSERT INTO cafe (`IdCafe`, `Name`, `Description`, `PRICE` ) VALUES (?)";
    const values = [
      req.body.idCafe,
      req.body.Name,
      req.body.Description,
      req.body.PRICE,
      
    ];
    console.log(req)
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.delete('/CoffeMenu/:id' , (req,res) =>{
    const id = req.params.id;
    const q = "DELETE FROM cafe WHERE IdCafe = ? "
    db.query(q,[id], (err,data)=>{
        if(err){return res.json(err)}
        else{
            return res.json('cafe  has been deleted successfully !')
            
        }
    })


  })

  app.put('/CoffeMenu/:id' , (req,res) =>{
    const id = req.params.id;
    const q = "UPDATE cafe SET `IdCafe`= ?, `Name`= ?, `Description`= ?, `PRICE`= ?WHERE IdCafe= ?  "
    const values = [
        req.body.idCafe,
        req.body.Name,
        req.body.Description,
        req.body.PRICE,

      ];
      //...values all the values 
    db.query(q,[...values,id], (err,data)=>{
        if(err){return res.json(err)}
        else{
            return res.json('element has been updated successfully !')
            
        }
    })


  })


  
  app.get('/Reservation', (req, res) => {
    db.query('SELECT * FROM commande', (err,data) => {
      if (err) {
        console.error('Error retrieving reservation data:', err);
        return res.status(500).send('Internal Server Error');
      } else {
       return res.json(data)
      }
    });
  });

 
   app.post("/Formulaire", (req, res) => {
     const { Name, Surname, phoneNumber, jour, tableR, libre, Chreno } = req.body;
  
     // Check if the table is free
     const checkTableQuery = "SELECT * FROM commande WHERE tableR = ? AND libre = 1  ";
     db.query(checkTableQuery, [tableR], (tableErr, tableData) => {
       if (tableErr) {
         return res.status(500).json({ error: "Error checking table availability." });
       }
       // jai rien trouve de libre 
       if (tableData.length === 0 ) {
          //Table is not free
         return res.status(400).json({ error: "Table est occupé choisissez une autre table" });
       }
  
        //Table is free,do the reservation
       const insertReservationQuery =
         "INSERT INTO commande (`Name`, `Surname`, `phoneNumber`, `jour`, `tableR`,`libre`, `Chreno` ) VALUES (?)";
       const values = [Name, Surname, phoneNumber, jour, tableR, libre , Chreno];
  
       db.query(insertReservationQuery, [values], (err, data) => {
         if (err) {
           return res.status(500).json({ error: "Error inserting into commande table." });
         }
  
         return res.json({ success: true, reservation: data });
       });
     });
   });
  
  

 
  
  app.post('/Registration' ,(req,res)=>{
    const q= "INSERT INTO admin (`username` , `password` ) VALUES (?) "
    const values = [
      req.body.username,
      req.body.password
    ]
    db.query(q, [values],(err,data)=>{
      if (err) return res.send(err);
      return res.json(data);
    })


  })

  app.post('/Login', (req, res) => {
    const q = "SELECT * FROM admin WHERE username = ? AND password = ?";
    const values = [req.body.username, req.body.password];
  
    db.query(q, values, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        if (data.length > 0) {
          res.send(data);
        } else {
          res.send({ message: 'Wrong username/password, try again' });
        }
      }
    });
  });
  
 