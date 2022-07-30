const dbConnection = require("./mongodb")
const update = async() => {
    const db = await dbConnection();
    let result = await db.update(
        {name:'Macbook M2'}, {$set:{name:'Macbook M1'}}
    )
    console.log(result);
}

update();