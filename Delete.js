const dbConnection = require("./mongodb");
const deleteItems = async() =>{
    const db = await dbConnection();
    let result = db.deleteOne({
       name:"Macbook M1"
    })
}

deleteItems();