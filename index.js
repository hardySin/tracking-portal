require('dotenv').config()
const express= require('express')
const app=express();
 const clientRoute=require('../tracking-portal/clientRoutes')
const loginRoute=require('../tracking-portal/loginRoutes')
const resourceRoute=require('../tracking-portal/resourceRoutes')
const projectRoute=require('../tracking-portal/projectRoutes')

const port=process.env.PORT || 4000
// const http=require('http')
// const server=http.createServer(app)
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require("express-session");
const dbConfig=require("./dbConfig")
const cookieParser=require('cookie-parser')
app.use(cors({ origin: true, credentials: true }));
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

   
  app.use(bodyParser.json());
  app.use(express.urlencoded({extended: true}))
   app.use('/tracking',clientRoute)
  app.use('/tracking',loginRoute)
  app.use('/tracking',resourceRoute)
  app.use('/tracking',projectRoute)
   
 
  dbConfig()

 
app.listen(port,()=>
{
    console.log("server started")
})