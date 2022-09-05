import  mongoose    from    "mongoose"

// Connecting to MongoDB
export  default class   ConnectDB{
    public username:    string  =   ""
    public password:   string =   ""
    public  mongoURI:   string  =   `mongodb+srv://${this.username}:${this.password}@cluster0.o3gg1.mongodb.net/?retryWrites=true&w=majority`

    constructor() {
        this.connection()
    }

    public connection() {
        mongoose.connect(this.mongoURI)
            .then(()=>{
                console.log("Connected to database")
            })
            .catch((err)=>console.log(`Error during DB connecting: ${err}`))
    }
}
