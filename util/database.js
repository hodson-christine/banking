const mongodb = require('mongodb');
const mongoose = require("mongoose");

const mongoConnect = async () =>{
	await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://christine:Kbug@223@cluster0.v0hb6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false,
         useCreateIndex: true
        })
	.then(client =>{
		console.log('Database connected Successfully!');
		// callback(client);
	})
	.catch(err =>{
		console.log(err);
	})
}
module.exports = mongoConnect;