import  mongoose    from    "mongoose"

// Connecting to MongoDB
export  default class   ConnectDB{
    constructor() {
        this.connection()
    }

    public connection() {
        mongoose.connect(process.env.MONGO_URI)
            .then(()=>{
                console.log("Connected to database")
            })
            .catch((err)=>console.log(`Error during DB connecting: ${err}`))
    }
}
