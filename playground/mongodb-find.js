const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) return console.log('unable to connect to MongoDB server');    
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').find({ name: 'Maneesh' }).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // client.close();
});