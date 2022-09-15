import express from "express";
import  router  from    "./routes/routes"
import  "reflect-metadata"
import  ConnectDBJS from    "./database/connect.js"
import  dotenv from    "dotenv"


const   app =   express()
const   port:   number  =   3000
const   db  =   new ConnectDBJS

dotenv.config()

db.connection()

app.use(express.json())
app.use(router)

app.use("/api/users",   router)


app.listen(port,    ()=>{
    console.log(`Server started at ${process.env.NODE_ENV}`)
})
