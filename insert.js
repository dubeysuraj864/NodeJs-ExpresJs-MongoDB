

const dbConnection = require('./mongodb');
const insert= async() => {
 
    const db =await dbConnection();
    const result = await db.insert(
    [
        {
            name:'Macbook 2020',
            brand:'Apple',
            price: 1299,
            category: 'Laptops'
        },
        {
            name:'Macbook M1',
            brand:'Apple',
            price: 1399,
            category: 'Laptops'
        },
        {
            name:'Poco M2 Pro',
            brand:'Apple',
            price: 1499,
            category: 'Mobiles'
        },
        {
            name:'iPhone 6s',
            brand:'Apple',
            price: 899,
            category: 'Mobiles'
        },
        {
            name:'iPad Mini 3',
            brand:'Apple',
            price: 999,
            category: 'Tablets'
        },
    ]
    )
    
    if(result.acknowledged ){
        console.log("data inserted")
    }
}

insert(); 