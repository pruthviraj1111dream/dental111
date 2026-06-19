var mysql=require('mysql2');
var util=require('util');

var conn=mysql.createConnection({
host:'bbgt8qrmbbf72p1b3kye-mysql.services.clever-cloud.com',
user:'uqsyrigzjkamvhq6',
password:'4c0W3solA8Vk25xAcSxj',
database: 'bbgt8qrmbbf72p1b3kye'
});

var exe=util.promisify(conn.query).bind(conn);

module.exports=exe;
