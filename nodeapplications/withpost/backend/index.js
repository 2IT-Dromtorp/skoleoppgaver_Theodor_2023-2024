const express = require('express');
const app = express();
const port = 3000;
var mysql = require('mysql');
var cors = require('cors');

app.use(cors());
app.use(express.json()); 

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'dromtorp'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.get('/', (request, response) => {
    const page = parseInt(request.query.page) || 1;
    const pageSize = parseInt(request.query.pageSize) || 10; 
    const offset = (page - 1) * pageSize;
    const paginatedQuery = 'SELECT * FROM elev LIMIT ? OFFSET ?';
    connection.query(paginatedQuery, [pageSize, offset], function (error, results) {
      if (error) {
        console.error('Error fetching paginated results:', error);
        response.status(500).send('Error fetching data');
        return;
      }
      const countQuery = 'SELECT COUNT(*) AS count FROM elev';
      connection.query(countQuery, function (countError, countResults) {
        if (countError) {
          console.error('Error fetching count:', countError);
          response.status(500).send('Error fetching count');
          return;
        }
        response.json({
          data: results,
          total: countResults[0].count,
          currentPage: page,
          pageSize: pageSize
        });
      });
    });
  });
  


  app.put("/updateuser", (request, response) => {
    let newhobby = request.body.newhobby;
    let fornavn = request.body.fornavn;
    let etternavn = request.body.etternavn;
    let klasse = request.body.klasse;
    let kjonn = request.body.kjonn;
    let datamaskinID = request.body.datamaskinID;
    let id = request.body.id;
    
    console.log(newhobby);
  
    
    let sqlquery = 'UPDATE elev SET hobby=?, Fornavn=?, Etternavn=?, Klasse=?, Kjonn=?, DatamaskinID=? WHERE ElevID=?';
  
    connection.query(sqlquery, [newhobby, fornavn, etternavn, klasse, kjonn, datamaskinID, id], function (error, results, fields) {
      if (error) throw error;
      response.send(JSON.stringify(results));
    });
  });
  

app.post("/adduser", (request, response) => {
  const klasse = parseInt(request.body.Klasse, 10) || 0;
  const datamaskinID = parseInt(request.body.DatamaskinID, 10) || 0;

  let newUser = {
    Fornavn: request.body.Fornavn || '',
    Etternavn: request.body.Etternavn || '',
    Klasse: klasse,
    Hobby: request.body.Hobby || '',
    Kjonn: request.body.Kjonn || '',
    DatamaskinID: datamaskinID
  };

  console.log('Attempting to insert:', newUser);

  if (!newUser.Fornavn) {
    response.status(400).send('Missing required field: Fornavn');
    return;
  }
  if (!newUser.Etternavn) {
    response.status(400).send('Missing required field: Etternavn');
    return;
  }
  if (!newUser.Kjonn) {
    response.status(400).send('Missing required field: Kjonn');
    return;
  }

  let sqlquery = 'INSERT INTO elev SET ?';

  connection.query(sqlquery, newUser, function (error, results, fields) {
    if (error) {
      console.error('Error in insert operation:', error);
      response.status(500).send('Error in insert operation: ' + error.sqlMessage);
      return;
    }
    response.send(JSON.stringify(results));
  });
});


app.delete("/deleteuser", (request, response) => {
  let id = request.body.id;

  let sqlquery = 'DELETE FROM elev WHERE ElevID = ?';

  connection.query(sqlquery, [id], function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*kan endre put og delete til post ved å bare endre .delete/put til post i index.js og i hver sin js fil 
axios.delete(`http://localhost:3000/deleteuser'  const response = await axios.put(`http://localhost:3000/updateuser` 
det er ingen grunn til å gjøre dette men du kan */