import  userController  from    "../controllers/userController"
import  protect from    "../middleware/auth"
import { Router } from "express";


const   router  =   Router()



router.route("/").post(userController.create)
router.route("/login").post(userController.login)
router.route("/:id").put(protect,   userController.update)

export  default router
