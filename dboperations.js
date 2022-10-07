var config = require('./dbconfig');
const sql = require('mssql');


async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT Id,FirstName,LastName,Order_id,Product_name,Status,Created_date FROM Users INNER JOIN Orders Orders  ON Id = Orders.User_id");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOrders: getOrders,
}