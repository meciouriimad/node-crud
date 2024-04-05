const db = require("../config/db")

class UserModal{

static async getUser(){
    return new Promise (resolve =>{
        db.query("select * from users",[],(error , result)=>{
            if(!error){
                resolve(result)
            }
        })
    })
}

static async addUser(name , email , password){
    return new Promise (resolve =>{
        db.query(
            "insert into users (name,email,password) values(?,?,?)",
            [name ,email ,password],
            (error , result) =>{error ? resolve(false) : resolve(true)}
        )
    }) 
}

static async deleteUser(id){
    return new Promise (resolve =>{
        db.query(
            "delete from users where id=?",
            [id],(error ,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

static async edit(id,name,email,password){
    return new Promise (resolve =>{
        db.query(
            "update users set name=?,email=?,password=? where id=?",
            [name,email,password,id],
            (error,result)=>{
                error ? resolve(false) : resolve(true)
            }
        )
    })
}

}

module.exports = UserModal;