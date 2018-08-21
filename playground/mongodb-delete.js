const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) return console.log('unable to connect to MongoDB server');    
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    db.collection('Users').findOneAndDelete({name: 'Jen'}).then((result) => {
        console.log(result);
    });

    // deleteOne

    // findOneAndDelete

    // client.close();
}); 