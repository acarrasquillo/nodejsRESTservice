# RESTservice
## A Simple REST service using node.js

REST service is for learning purposes

### Requirements

*	MySQL Server
	*	Employee sample database 
* 	Node.js
	*	mysql module  	

### Database
This REST service uses the MySQL Employees sample database available from the [MySQL](http://dev.mysql.com/doc/employee/en/) site. You'll need this database running on your MySQL server. The installation instructions are available [here](http://dev.mysql.com/doc/employee/en/employees-installation.html).

### Routes


END POINTS | REQUEST (OPERATIONS) | DESCRIPTION 
---------- | -------------------- | -----------
**EMPLOYEES**|
`http://web:9000/employees`| **GET** (*fetch/read/query*)
`http://web:9000/employees/#empId`|	**GET** (*fetch/read/query*)
`http://web:9000/employees`| **POST** (*insert*)
`http://web:9000/employees`| **PUT** (*update*)
`http://web:9000/employees`| **DELETE** (*delete*)
**DEPARTMENTS**|
`http://web:9000/departments`	| **GET** (*fetch/read/query*)
`http://web:9000/departments/#deptId` | **POST** (*insert*) 
`http://web:9000/departments`	| **PUT** (*update*)
`http://web:9000/departments`	| **DELETE** (*delete*)
**DEPARTMENTS EMPLOYEES**|
`http://web:9000/departments/#deptId/employees`	| **GET** (*fetch/read/query*)
`http://web:9000/employees/department/#deptId`	| **GET** (*fetch/read/query*)