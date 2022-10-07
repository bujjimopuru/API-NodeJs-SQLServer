class Order{
    constructor(Order_id,Product_name,Status,Created_date){
        this.Order_id= Order_id; 
        this.Product_name = Product_name; 
        this.Status = Status;
        this.Created_date = Created_date;
    }
}

module.exports = Order;
