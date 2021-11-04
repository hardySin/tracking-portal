const express=require('express');
const projectRoutes=express.Router();
const Client=require('./model/Client');    
 
  const handlerError=(err)=>
  {
    let client={clientName:'',node:'',nodalCustodian:'',customerCustodian:'',deliveryAnchor:'',projectManager:''};
          if(err.message.includes('Client validation failed'))
        {
          Object.values(err.errors).forEach(({properties})=>
          {

             let path=properties.path 
             let message=properties.message
             client[properties.path]=properties.message
             })

             return client;
        }
        else if(err.message.includes('Client validation failed'))
        {

        }
    }

    projectRoutes.post('/projectMaster',async(req,res)=>
{
       const {clientName,projectType,projectCost,projectWorkName,projectHours,clientSpokesperson,
        status,assignDate,priority,initialTargetDate,revisedTargetDate,reasonforTargetDateChange,
        extendedTo,extensionReasons,completionDate,remarks
        }= req.body.project
  
       // a document instance
      var Resource = new resource({ resourceTMC: resourceTMC, resourceName: resourceName, reportingManager:reportingManager, 
        resourceCTC:resourceCTC,resourceSkillSet:resourceSkillSet,resourceLocation:resourceLocation});
 
      // save model to database
       Resource.save(function (err, result) {
        if (err)
        {
            handlerError(err)
            res.status(400).send('error while creating the user')
         }
         res.status(201).json(result)
       });
})
   
  
module.exports=projectRoutes;


 