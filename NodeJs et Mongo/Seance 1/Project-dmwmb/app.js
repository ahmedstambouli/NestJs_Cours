const express=require('express');
const bodyParse=require("body-parser")
const mongoos=require('mongoose');//importe mongoose
const dotenv=require('dotenv');
const auth=require('./routes/auth');

const productRoute=require("./routes/products.js")
const VoitureRoute=require("./routes/VoitureRoutes.js")

//innstance from express
const app=express();

//configuration le file env
dotenv.config()
const MONGODB_URI= process.env.MONGODB_URI
const PORT = process.env.PORT || 5000

//middleware to parse the incoming request bodies in a middleware before handlers and routes.
app.use(bodyParse.json( )); 
//importaion auth  router and use it in the path /auth
app.use('/auth',auth);

app.use("/product",productRoute);

app.use("/voiture",VoitureRoute)

//lazem n7oto el '/' fel le5er 5ater raw 3adi ya9ra ken el get eli fiha '/' yensa lo5rin 



//cette methode return containte page index.html (dirname c'est un short list pour resumer le partie de template html(t3axed el path))
app.get("/template",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});







//methode get
app.get("/product",(req,res)=>{
    res.send({name:'product 1',price:100});
});


app.get("/redirect",(req,res)=>{
    res.redirect('/product');
});


//methode get or default before run server
app.get("/",(req,res)=>{
    res.send("Hello World");
    

});



//creation of the server instance
// app.listen(9000,()=>{
//     console.log("Server is running on port 9000");
// })

mongoos.connect(MONGODB_URI).then(()=>{
    console.log('connected to the database');
    app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`);})
}).catch(err=>{console.log(err);})
