import  User    from    "../models/userSchema"
import generateToken from "../utils/generateToken"
import  {Request,    Response}  from    "express"


export  default {   
    async   create(req:Request,res:Response){
        const    {name,  email,  password}   =   req.body
        const   userExists: any  =   await   User.findOne({  email   })
        if(userExists){
            res.status(400).json("User already exists")
        }
        try{
            const   user    =   await   User.create({
                name: name,
                email: email,
                password: password
            })
            res.status(201).json(user)
        }catch(err){
            res.status(400).json(err)
        }
    },


    async   login(req: Request,    res: Response){
        const   {email, password}   =   req.body
        const   user:    any    =   await   User.findOne({email})
        if(!user){
            res.status(400).json("User not found")
        }
        if(await    user.matchPassword(password)){
            res.status(200).json({
                _id: user?._id,
                name:   user.name,
                eail:   user?.email,
                token:  generateToken(user._id)
            })
        }else{
            res.status(400).json("Invalid email or password")
        }
    },


    async   update(req: Request,    res: Response){
        const   user:   any=   await   User.findById(req.params.id)
        if(!user){
            res.status(400).json("User doesn't exists")
        }
        user.name   =   req.body.name ||    user.name
        user.email  =   req.body.email  ||    user.email
        try{
            const   updateUser  =   await   user?.save()
            res.status(201).json(updateUser)
        
        }catch(err){
            res.status(400).json(err)
        }
    }
}
