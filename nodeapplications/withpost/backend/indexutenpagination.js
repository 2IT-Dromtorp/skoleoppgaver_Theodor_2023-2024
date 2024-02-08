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
  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
});


app.post("/updateuser", (request, response) => {
  let newhobby = request.body.newhobby;
  let id = request.body.id;
  console.log(newhobby);
  let sqlquery = 'UPDATE elev SET hobby=? WHERE ElevID=?';

  connection.query(sqlquery, [newhobby, id], function (error, results, fields) {
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


app.post("/deleteuser", (request, response) => {
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
