const express=require('express');
const resourceRoutes=express.Router();
const Resource=require('./model/resource');    
 
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
   
 

    resourceRoutes.post('/resource-master',async(req,res)=>
{
      const {resourceTMC,resourceName,reportingManager,resourceCTC,resourceSkillSet,resourceLocation}= req.body.resource
  
      console.log(resourceTMC,resourceName,reportingManager,resourceCTC,resourceSkillSet,resourceLocation)
      // a document instance
      var resource = new Resource({ resourceTMC: resourceTMC, resourceName: resourceName, reportingManager:reportingManager, 
        resourceCTC:resourceCTC,resourceSkillSet:resourceSkillSet,resourceLocation:resourceLocation});
 
      // save model to database
      resource.save(function (err, result) {
        if (err)
          {
            console.log("error :" ,err)
//           let error= handlerError(err)
            res.status(400).json(error)
           }
         res.status(201).json(result)
       });
})

module.exports=resourceRoutes;