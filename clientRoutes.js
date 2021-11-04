const express=require('express');
const clientRoutes=express.Router();
const Client=require('./model/Client');    
 
  const handlerError=(err)=>
  {
     let client={clientName:'',node:'',nodalCustodian:'',customerCustodian:'',deliveryAnchor:'',projectManager:''};
          if(err.message.includes('Clients validation failed'))
        {
            Object.values(err.errors).forEach(({properties})=>
          {
              client[properties.path]=properties.message
             })
             console.log("client : ",client)
              return client;
        }
     }
   
    clientRoutes.post('/client-master',async(req,res)=>
{
     const {clientName,node,nodalCustodian,customerCustodian,deliveryAnchor,projectManager}= req.body.client
 console.log(clientName,node,nodalCustodian,customerCustodian,deliveryAnchor,projectManager)
       // a document instance
      var client = new Client({ clientName: clientName, node: node, nodalCustodian:nodalCustodian, 
        customerCustodian:customerCustodian,deliveryAnchor:deliveryAnchor,projectManager:projectManager});
        
       console.log("client ",client)
      // save model to database
      client.save(function (err, result) {
        if(err)
        { 
           let error=handlerError(err)
           res.status(400).json({error})
         }

         console.log("hello whello leool leo ",result)
           res.status(201).json(result)
          
        });
})
 

clientRoutes.get('/getClientMaster',async(req,res)=>
{
     Client.find({active: true}, function (err, result) {
        if (err)
        {
            handlerError(err)
            res.status(400).send('error while creating the user')
        }
        res.json(result)
          console.log("result : "+ result.length);
        })
})
   
clientRoutes.post('/editClient',async(req,res)=>
{
  const {clientName,node,nodalCustodian,customerCustodian,deliveryAnchor,projectManager}= req.body.clientData.client
  const  clientId= req.body.clientData.clientId 
   
  console.log("editClient",clientName,node,nodalCustodian,customerCustodian,deliveryAnchor,projectManager,clientId)
 
  const filter = { _id: clientId };
  const doc = { $set: {"clientName":clientName,"node":node,"nodalCustodian":nodalCustodian,
  "customerCustodian":customerCustodian,"deliveryAnchor":deliveryAnchor,"projectManager":projectManager}};
  const options = { new: true };

      Client.findOneAndUpdate(filter, doc, options, (err, doc) => {
              if (err)
            {
              let error=handlerError(err)
              res.status(400).json({error})
            }
            Client.find({active: true}, function (err, result) {
              if (err)
              { 
                  handlerError(err)
                  res.status(400).send('error while creating the user')
              }
              res.json(result)
               })
      })
})

clientRoutes.post('/deleteClient',async(req,res)=>
{

  const clientStatus= req.body.clientData.clientStatus
  const  clientId= req.body.clientData.clientId 
  console.log("deleteclient",clientStatus,clientId)
 
  const filter = { _id: clientId };
  const doc = { $set: {"active":clientStatus}};
  const options = { new: true };

  Client.findOneAndUpdate(filter, doc, options, (err, doc) => {
              if (err)
            {
              let error=handlerError(err)
              res.status(400).json({error})
            }
            Client.find({active: true}, function (err, result) {
              if (err)
              {
                  handlerError(err)
                  res.status(400).send('error while creating the user')
              }
              res.json(result)
                })
      })  
})


clientRoutes.post('/getByClientID',async(req,res)=>
{
  const clientId= req.body.clientId

  Client.findOne({_id: clientId}, function(err, result) {
    if (err) {
      res.status(400).json({error:err})
    } else {
      res.json(result)
     }
  });
  
  })

module.exports=clientRoutes;