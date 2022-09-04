import express from "express";
import  router  from    "./routes/routes"
import  "reflect-metadata"
import  "./database/connect"


const   app =   express()
const   port:   number  =   3000


app.use(express.json())
app.use(router)


app.listen(port,    ()=>{console.log(`Server started at http://localhost:${port}`)})


