var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ResourceSchema = new Schema(
  {
    clientName: 
    {
       type: String,
       required:[true,'Please Enter the Valid ClientName'] ,
       minlength:[6,"Please Enter the Valid ClientName"], 
       maxlength: 500
     },
     
     projectType:
     {
      type: String,
      required:[true,'Please Enter the Valid ProjectType'] ,
      minlength:[6,"Please Enter the Valid ProjectType"], 
      maxlength: 500
    },

    projectCost: 
     {
       type: String,
       required:[true,'Please Enter the Valid ProjectCost'] ,
       minlength:[6,"Please Enter the Valid ProjectCost"], 
       maxlength: 500
      }, 

    projectWorkName: 
    {
      type: String, 
      required:[true,'Please Select the Valid ProjectWorkName'] ,
      minlength:[6,"Please Select the Valid ProjectWorkName"], 
      maxlength: 500
    },
    
    projectHours:
     {
      type: String, 
      required:[true,'Please Select the Valid ProjectHours'] ,
      minlength:[6,"Please Select the Valid ProjectHours"], 
      maxlength: 500
    },

    clientSpokesperson:
     {
      type: String,
      required:[true,'Please Select the Valid ClientSpokesperson'] ,
      minlength:[6,"Please Select the Valid ClientSpokesperson"], 
      maxlength: 500,
    },

    status:
     {
      type: String,
      required:[true,'Please Select the Valid Status'] ,
      minlength:[6,"Please Select the Valid Status"], 
       maxlength: 500,
    },
    assignDate:
     {
        type: Date,
        required:[true,'Please Select the Valid AssignDate'] ,
      minlength:[6,"Please Select the Valid AssignDate"], 
      maxlength: 500,
    },
    priority:
     {
      type: String,
      required:[true,'Please Select the Valid Priority'] ,
      minlength:[6,"Please Select the Valid Priority"], 
      maxlength: 500,
    },
    initialTargetDate:
     {
        type: Date,
        required:[true,'Please Select the Valid InitialTargetDate'] ,
      minlength:[6,"Please Select the Valid InitialTargetDate"], 
      maxlength: 500,
    },
    revisedTargetDate:
     {
        type: Date,
        required:[true,'Please Select the Valid RevisedTargetDate'] ,
      minlength:[6,"Please Select the Valid RevisedTargetDate"], 
      maxlength: 500,
    },
    reasonforTargetDateChange:
     {
      type: String,
      required:[true,'Please Select the Valid ReasonforTargetDateChange'] ,
      minlength:[6,"Please Select the Valid ReasonforTargetDateChange"], 
      maxlength: 500,
    },
    extendedTo:
     {
        type: Date,
        required:[true,'Please Select the Valid ExtendedTo'] ,
      minlength:[6,"Please Select the Valid ExtendedTo"], 
      maxlength: 500,
    },
    extensionReasons:
     {
      type: String,
      required:[true,'Please Select the Valid ExtensionReasons'] ,
      minlength:[6,"Please Select the Valid ExtensionReasons"], 
      maxlength: 500,
    },
    completionDate:
     {
        type: Date,
        required:[true,'Please Select the Valid CompletionDate'] ,
        minlength:[6,"Please Select the Valid CompletionDate"], 
        maxlength: 500,
    },
    remarks:
     {
      type: String,
      required:[true,'Please Select the Valid Remarks'] ,
      minlength:[6,"Please Select the Valid Remarks"], 
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
