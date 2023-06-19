const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aboutUsSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    text: {
        type : String,
        required : true
    },
    },
     {timestamp : true}
     )

     module.exports = mongoose.model('AboutUs',aboutUsSchema);