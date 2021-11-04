var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CreateUserSchema = new Schema(
  {
   
    full_name:
     {
      type: String,
      required: true, 
      },
     
    email:
     {
      type: String,
      required: true,
      maxlength: 500,
      unique:true,
     },

     head_email:
     {
      type: String,
      required: true,
      maxlength: 500,
      },

      role_type:
     {
      type: String,
      required: true,
      maxlength: 500,
      },

      role_type:
      {
       type: String,
       required: true,
       maxlength: 500,
       },

       
    created_on: 
     {
      type: Date,
      default: Date.now
    },
    modified_on:
     {
      type: Date,
      default: Date.now
    } ,

    // passord_modified_on:
    //   {
    //     type: Date,
    //     default: Date.now},
    // Is_verfied: 
    //   {
    //   type: Boolean,
    //   default: false
    //   }
    }
);

module.exports = mongoose.model('Users', CreateUserSchema);
