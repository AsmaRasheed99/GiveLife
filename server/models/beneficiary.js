const mongoose = require('mongoose');
const { ObjectId } = require('mongodb'); //Ask about it//


const Schema = mongoose.Schema;
const beneficiarySchema = new Schema({
     
    Name: {
      type : String,
      required : true
  },
   b_id: {
      type : ObjectId,
      required : true
  },
  donationType: {
      type : String,
      required : true
  },
  location:{
      type : String,
      required : true
  },
  price:{
      type : Number,
      required : true
  },
  currentDonation:{
      type : Number,
      default : 0,
      required : true
  },
  flag:{
      type : Boolean,
      default : false,
      required : false
  },
  donationCase:{
      type : String,
      required : true
  },
  usersId:{
      type : Array,
      required : false
  },
  des:{
    type : String,
    required : false
},
  },
   {timestamp : true}
  )

    module.exports = mongoose.model('Beneficiarys',beneficiarySchema);