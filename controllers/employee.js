var db = require("../core/db");

exports.getList = function (req,resp){
	console.log("getList() : Call");
	db.executeSql("SELECT * FROM employees", function (data,err){
		if (err){
			console.log("getList() : Error");
			resp.writeHead(500, "Internal Error ocurred", { "Content-Type": "text/html" });
			resp.write("<html><head><title>500</title></head><body>500: Internal Error. Details: " + err + "</body></html>");
		}
		else{
			console.log("getList() : Ok");
			resp.writeHead(200, {"Content-Type": "application/json"});
			resp.write(JSON.stringify(data));

		}
		resp.end();
	});
};

exports.get = function (req, resp, empId){

};

exports.add = function (req,resp, reqBody){

};


exports.update = function (req,resp, reqBody){

};

exports.delete = function (req,resp, reqBody){

};
