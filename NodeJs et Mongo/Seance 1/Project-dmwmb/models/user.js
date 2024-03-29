const mongoos = require('mongoose')
const bcrypt =require('bcrypt')

const userSchema=new mongoos.Schema({
    username:{type:String,unique:true},
    password:String

})

//methde apre save 
userSchema.pre('save',async function(next){
    let user=this;
    if(user.isModified('password'))
    {
        user.password= await bcrypt.hash(user.password,10);
    }
    next();
})


const User =mongoos.model('User',userSchema)
module.exports=User