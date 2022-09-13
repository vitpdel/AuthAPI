'use strict'

const   dot =   require("dotenv").config({ path:    ".env" })
const   mongoose    =   require("mongoose")    


module.exports= class   ConnectDBJS{
    constructor(){
        this.connection()
    }

    async   connection(){
        const   uri =   process.env.MONGO_URI
        mongoose.connect(uri).then(()=>console.log("Connected to database")).catch((err)=>{
            console.log(`Error during database connecting: ${err}`)
        })
    }
}
