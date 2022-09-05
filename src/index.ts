import express from "express";
import  router  from    "./routes/routes"
import  "reflect-metadata"
import  ConnectDB from    "./database/connect"


const   app =   express()
const   port:   number  =   3000


const   db  =   new ConnectDB


app.use(express.json())
app.use(router)


app.listen(port,    ()=>{console.log(`Server started at http://localhost:${port}`)})


db.connection()
