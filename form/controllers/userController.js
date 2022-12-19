import UserModel from "../models/User.js"
class UserController {
    static home = (req,res) => {
        res.render("index")
    }
    static registration = (req,res) => {
        res.render("registration")
    }
    static createUserDoc =async(req,res) =>{
        try{
            // creating new doc using model
            const doc= new UserModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                city:req.body.city,
                state:req.body.state,
                pin: req.body.pin
                
                
            })
            await doc.save()
            res.redirect('./login')

         } catch(error){
                console.log(error)
            }
        
    }
    static login = (req,res) => {
        res.render("login")
    }
}
export default UserController