import express from "express"
import {signup , login , logout , getOtherUsers} from "../controllers/userController.js"
import isAuthenticated from "../middleware/isAuthenticated.js"
const router = express.Router()

router.post("/signup" , signup)
router.post("/login" , login)
router.get("/logout" , logout)
//hum sare otherusers ko toh home pe render krenge and sare otherusers ko hum tabhi render krenge agar joh user hain voh loggedin hain toh hum isme inline middleware pass kredenge joh humne banaya hain 
router.get("/" , isAuthenticated ,  getOtherUsers)
export default router;