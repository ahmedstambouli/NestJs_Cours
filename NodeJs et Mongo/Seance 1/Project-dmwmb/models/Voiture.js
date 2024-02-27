const mongoos = require('mongoose')
const voitureSchema=new mongoos.Schema({
    id: { type: Number, required: true,unique:true },
    name:{type:String,unique:true}
})

//save voiture
voitureSchema.pre( 'save',async function (next) {
    let voiture=this;
    next();

})

const Voiture = mongoos.model('Voiture', voitureSchema);
module.exports=Voiture