

const dbConnection = require('./mongodb');
const insert= async() => {
 
    const db =await dbConnection();
    const result = await db.insert(
    {
        name:'Macbook 2020',
        brand:'Apple',
        price: 1299,
        category: 'laptops'}
    )
    
    if(result.acknowledged ){
        console.log("data inserted")
    }
}

insert(); 