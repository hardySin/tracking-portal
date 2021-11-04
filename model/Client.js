var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema(
  {
    clientName: 
    {
       type: String,
       required:[true,'Please Enter the Valid ClientName'] ,
       minlength:[6,"Please Enter the Valid ClientName"], 
       maxlength: 500
     },
     
    node:
     {
      type: String,
      required:[true,'Please Enter the Valid Node'] ,
      minlength:[6,"Please Enter the Valid Node"], 
      maxlength: 500
    },
     nodalCustodian: 
     {
       type: String,
       required:[true,'Please Enter the Valid NodalCustodian'] ,
       minlength:[6,"Please Enter the Valid NodalCustodian"], 
       maxlength: 500
      }, 

     customerCustodian: 
    {
      type: String, 
      required:[true,'Please Select the Valid CustomerCustodian'] ,
      minlength:[6,"Please Select the Valid CustomerCustodian"], 
      maxlength: 500
    },
    
    deliveryAnchor:
     {
      type: String, 
      required:[true,'Please Select the Valid DeliveryAnchor'] ,
      minlength:[6,"Please Select the Valid DeliveryAnchor"], 
      maxlength: 500
    },

      projectManager:
     {
      type: String,
      required:[true,'Please Select the Valid ProjectManager'] ,
      minlength:[6,"Please Select the Valid ProjectManager"], 

      maxlength: 500,
    },

    created_on: 
     {
      type: Date,
      default: Date.now
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
    },

    created_on: 
     {
      type: Date,
      default: Date.now
    },

    active:
      {
        type: Boolean,
        default: true
     },

    delete: 
      {
      type: Boolean,
      default: false
      }
    }
);

module.exports = mongoose.model('Clients', ClientSchema);
