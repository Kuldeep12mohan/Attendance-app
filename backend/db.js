const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/");
const subjectSchema = new mongoose.Schema({
  subjectName:
  {
    type:String,
  },

  colors:{
    type:Object,
    key:String,
    value:Array
  },
  red:Number,
  green:Number
});
const Subject = mongoose.model('Subject',subjectSchema);
module.exports = {
  Subject,
};