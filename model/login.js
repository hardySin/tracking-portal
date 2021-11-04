var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 var LoginSchema = new Schema(
  {
    email: 
    {
      type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required:[true,'Email address is required'] ,
        validate: function(email) {
          return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
        }
     },
     
     password:
     {
      type: String,
      required:[true,'Please Enter the Valid Password'] ,
      minlength:[6,"Please Enter the Valid Password"], 
      maxlength: 500
    }
});

// LoginSchema.pre('save',(doc,next)=>
// {
//   console.log("pre pre pre pre pre pre pre pre")
//   next();
// })


module.exports = mongoose.model('Login', LoginSchema);
