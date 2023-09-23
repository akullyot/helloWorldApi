//Require Mongoose
const mongoose = require('mongoose');
//Purpose: Shorthand for the Schema constructor
const {Schema} = mongoose;
//Purpose: Define our collection and create validation rules
const languageSchema = new Schema(
  {
      name        : {type : String, required: true},
      greeting    : {type : String},
      pangram     : {type : String},
      filler      : {type : String,}  
  }
);




//Purpose: Use said schema to create a model 
const Language = mongoose.model('Language', languageSchema);
//Im going to pull out all my helper methods/restrictions 
// Syntax : key = field Name, value = the restrictions

module.exports = Language