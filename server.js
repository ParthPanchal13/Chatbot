const express = require("express")
const app = express()
const http = require('http').createServer(app)
const mysql = require('mysql')


http.listen(3000, () => {
	console.log('listening on port 3000');
});

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.get('/',(req,res)=>{
	res.sendFile(__dirname +"/"+ "chat.html")
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database :"bot"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/api',(request,response)=>{
	console.log(request.body);
	const data = request.body;

	const id = data.id;
	
	const table = data.table;
	con.query("SELECT * FROM "+table+" WHERE id = "+id, function (err, result) {
    	if (err) throw err;
    	console.log(result);
    	response.json(result);
    	
  	});

});