var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ResourceSchema = new Schema(
  {
    resourceTMC: 
    {
       type: String,
       required:[true,'Please Enter the Valid ResourceTMC'] ,
       minlength:[6,"Please Enter the Valid ResourceTMC"], 
       maxlength: 500
     },
     
     resourceName:
     {
      type: String,
      required:[true,'Please Enter the Valid ResourceName'] ,
      minlength:[6,"Please Enter the Valid ResourceName"], 
      maxlength: 500
    },

    reportingManager: 
     {
       type: String,
       required:[true,'Please Enter the Valid ReportingManager'] ,
       minlength:[6,"Please Enter the Valid ReportingManager"], 
       maxlength: 500
      }, 

      resourceCTC: 
    {
      type: String, 
      required:[true,'Please Select the Valid ResourceCTC'] ,
      minlength:[6,"Please Select the Valid ResourceCTC"], 
      maxlength: 500
    },
    
    resourceSkillSet:
     {
      type: String, 
      required:[true,'Please Select the Valid ResourceSkillSet'] ,
      minlength:[6,"Please Select the Valid ResourceSkillSet"], 
      maxlength: 500
    },

    resourceLocation:
     {
      type: String,
      required:[true,'Please Select the Valid ResourceLocation'] ,
      minlength:[6,"Please Select the Valid ResourceLocation"], 

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

module.exports = mongoose.model('Resource', ResourceSchema);
