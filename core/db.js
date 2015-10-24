var mysql = require("mysql");
var settings = require("../settings");

exports.executeSql = function (sql, callback) {
	console.log("executeSql() : Call");
	var conn = mysql.createConnection(settings.config);
    // Connect to db
    conn.connect(function (err) {
		if (err) {
		 	console.error('error connecting: ' + err.stack);
		    callback(null,err);
		}
		else{
			console.log('connected as id ' + conn.threadId);
		    
		    // Query 
		    
		    conn.query(sql, function (err, data){
		    	if (err){
		    		callback(null,err);
		    	}
		    	else{
		    		callback(data,null);
		    	}
		    });
		}
		conn.end(function (err){
			if (err) console.log(err);
		});
	});
	// var conn = new sqlDb.Connection(settings.dbConfig);
	// conn.connect()
	// .then(function () {
	// 	console.log("executeSql() : Connection Succeed");
	// 	var req = new sqlDb.Request(conn);
	// 	req.query(sql).
	// 	then(function (recordset){
	// 		console.log("query() : Succeed");
	// 		callback(recordset);
	// 	})
	// 	.catch( function (err) {
	// 		console.log("query() : Failed");
	// 		console.log(err);
	// 		callback(null,err);
	// 	});
	// })
	// .catch(function (err){
	// 	console.log("executeSql() : Connection Failed");
	// 	console.log(err);
	// 	callback(null,err);
	// });
	// var mysql      = require('mysql');
	// 
	// var connection = mysql.createConnection({
	//   host     : 'localhost',
	//   user     : 'user',
	//   password : 'password',
	//   database : 'employees'
	// });

	// connection.connect();

	// connection.query('SELECT * FROM employees', function(err, rows, fields) {
	//   if (err) throw err;

	//   console.log('The first row is: ', rows[0]);
	// });

	// connection.end();
};

