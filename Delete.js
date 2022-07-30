const dbConnection = require("./mongodb");
const deleteItems = async() =>{
    const db = await dbConnection();
    let result = db.deleteMany({
       name:"Macbook 2020"
    })
    if(result.acknowledged){
    console.log("record deleted")
    }
    else if(!result.acknowledged){
        console.log("Oops...")
    }
}

deleteItems();