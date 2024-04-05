const UserModal = require("../model/Users")

class UserController{

    static async getalluser(req,res){
        var result = await UserModal.getUser();
        if(result){
            res.send(result)
        }
    }

    static async addnewUser(req,res){
        var name = req.body.name
        var email = req.body.email
        var password = req.body.password
        var result = await UserModal.addUser(name , email , password);
        result ? res.send("user added") : res.send("Error cant add user")
    }

    static async deleteUser(req,res){
        const id = req.body.id
        var result = await UserModal.deleteUser(id)
        result ? res.send("user deleted") : res.send("Error cant delete user")
    }


    static async updateUser(req,res){
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        var result = await UserModal.edit(id,name,email,password)
        result ? res.send("user updated") : res.send("Error cant update user")
    }

}

module.exports = UserController;