const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Husain01:Hussain2001@huss.he263.mongodb.net/keeper?authSource=admin&replicaSet=atlas-gvwdfu-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

const connectToMongo = () => {
mongoose.connect(mongoURI, () =>{
    console.log("Connected to Mongo Successfully")
})
}

module.exports = connectToMongo