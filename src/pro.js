const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user1:kmit1@cluster0.7pq8ivp.mongodb.net/POTUS?retryWrites=true&w=majority")
.then(()=>console.log("Connection Established"))
.catch((err)=>console.log(err));
const demoSchema={
    name:String,
    terms:String,
    gender:String
}
const Model1=mongoose.model("prez",demoSchema)
Model1.find({},(err,data)=>{
    if(err) return console.log(err)
    res=data;
    return(
         console.log(res[0].name),
        console.log(res[0].gender),
        console.log(data)
    )
})