import  jwt from    "jsonwebtoken"
import  User    from    "../models/userSchema"
import  {Request,   Response}   from    "express"


const   protect =   async(req:  Request,  res:  Response,    next:  any)=>{
    let token

    interface JwtPayload {
        _id: string
      }
      
    if(
        req.headers.authorization   &&
        req.headers.authorization.startsWith("Bearer")
    ){

        try{
            token   =   req.headers.authorization.split(" ")[1]
            const   {_id} =   jwt.verify(token,   process.env.JWT_SECRET)   as  JwtPayload

            req.user   =   await   User.findById(_id).select("-password")

            if(_id   ==  req.params._id){
                next()

            }else{
                res.status(401).json("Invalid token")
            }

        }catch(err){
            res.status(401).json("No token")
        }
    }
}

export  default  protect
