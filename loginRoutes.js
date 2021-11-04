const express=require('express');
const loginRoute=express.Router();
const Login =require('./model/login');
const Users  =require('./model/user');

 const Mail=require('./sendMail');
 const jwt=require('jsonwebtoken')
 const bcrypt = require('bcrypt');
 const axios = require('axios');
const e = require('express');
const { response } = require('express');

 const max= 3* 24 * 60 *60;

 const handlerError=(err)=>
  {
          let login={email:'',password:''};
           if(err.message.includes('Login validation failed'))
        {
           Object.values(err.errors).forEach(({properties})=>
             {
              login[properties.path]=properties.message
             })
             return login;
        }
      }

      const userExits = (req, res, next)=> {
         const { email,password }= req.body.user
          
         console.log(email,password)
            Users.find({ email: email}, function (err, docs) { 
            if (err){ 
                console.log(err); 
            } 
            else{ 
               res.locals.user = docs;
                console.log("Second function call : ", docs); 
            } 
        }); 
           next()
       }


       const headPresent = (req, res, next)=> {
         const { email,password }= req.body.user
         console.log("req.value", res.locals.user) 
             console.log(email,password)
            Users.find({ head_email: email}, function (err, docs) { 
            if (err){ 
                console.log(err); 
            } 
            else{ 
                console.log("Second function call : ", docs); 
            } 
        }); 
           next()
       }



// here the id is payload of this function 
const createToken=(id)=>
{
   // here the second arguments is be secure bec. if any knows the key it can access the data
   return jwt.sign({id},'hardeepSingh',{expiresIn: max})
}

   loginRoute.post('/signin',userExits,headPresent,async(req,res)=>
{
      // Mail.sendMail("assdsdasds")
       const { email,password }= req.body.user
 
       const setter= { headEmail:"",name:"" };
      // const salt = await bcrypt.genSalt(6);
      // const hashed = await bcrypt.hash(password, salt);
      const obj= await getData(email);
      if(obj!="No Data Available")
     {
       obj.forEach(obj => {
         Object.entries(obj).forEach(([key, value]) => {
             console.log(key);

             if(key=="HeadMail" )
             {
               setter.headEmail=value
             }
             else if(key=="First Name")
             {
               setter.name=value
            }
         });
      });  

      console.log("key",setter);
        var user = new Users({ full_name: setter.name, email: email, head_email: setter.headEmail});
  
         user.save(function (err, result) {
        try    
        {   
           if(result!=undefined)
          { 
             const jwt= createToken(result._id)
              res.cookie(process.env.COOKIESID, jwt,{httpOnly:true });
             res.status(200).json({valid:1})
            }
           else{
             let error=handlerError(err)
              res.status(400).json({error})   
            }
        }
         catch(err) 
        {   
         let error=handlerError(err)
         console.log("error",err)
         res.status(400).json({error})
        }
        });
      } 
      else
      {
            console.log("dasdasdadas")
      }
   })
    

  const getData=(email)=>
  {
      return new Promise((resolve,reject) => {
      setTimeout(() => {
//         http://10.11.4.65:9098/api/Employee/GetEmployeeDetails?TMC=ankit.gupta@teamcomputers.com
         axios.get("http://14.143.36.132:9098/api/Employee/GetEmployeeDetails?TMC="+email)
        .then(response => {
            if( response=="No Data Available")
            {
               resolve("No Data Available");s
            }
                 resolve(response.data);
           })
        .catch(error => {
         setTimeout(() => reject('woops'), 1000);
         });

      }, 2000);
    });
      }
  

       module.exports=loginRoute;


 