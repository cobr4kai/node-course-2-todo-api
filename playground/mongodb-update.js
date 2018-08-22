const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) return console.log('unable to connect to MongoDB server');    
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b7a70ad8270d5258823b70e')
    }, {
        $set: { name: 'Maneesh'},
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
}); 