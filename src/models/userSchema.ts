import  mongoose,   { Schema }  from    "mongoose"
import  bcrypt  from    "bcrypt"


const   userSchema  =   new Schema({
    name:   {
        type:   String,
        required:   true
    },

    email:  {
        type:   String,
        unique: true,
        required:   true,
        match:    /.+\@.+\..+/
    },

    password:   {
        type: String,
        required:   true,
        minlength: 8,
    }
    },{
    timestamps: true,
    collection: "users",
    versionKey: true,
})


userSchema.methods.matchPassowrd    =   async   function(enteredPassword:   any){
    return  await   bcrypt.compare(enteredPassword,    this.password)
}


userSchema.pre("save",  async   function(next){
    if(!this.isModified("password")){
        next()
    }

    const   salt    =   await   bcrypt.genSalt(10)
    this.password   =   await   bcrypt.hash(this.password,  salt)
})


const   User    =   mongoose.model("User",  userSchema)
export  default User
