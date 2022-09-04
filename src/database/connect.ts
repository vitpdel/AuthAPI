//import { createConnection }    from    "typeorm"
//createConnection().then(()=>console.log("Connected to database"))

import  mongoose    from    "mongoose"

const   mongoURI    =   "mongodb+srv://<User>:<Password>@cluster0.o3gg1.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(mongoURI).then(()=>{
    console.log("Connected to database")
}).catch((err)=>console.log(err))

