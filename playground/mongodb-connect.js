const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) return console.log('unable to connect to MongoDB server');    
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'Maneesh',
        age: '26',
        location: 'Seattle'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));        
    });

    client.close();
});