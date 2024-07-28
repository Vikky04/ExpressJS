const express=require("express");
const app=express();
// console.dir(app);
let port=3000;
app.listen(port,()=>{
    console.log("app is listening");
});
//routing 
// app.get use
/*
app.use("/pathname",(req,res)=>{
   res.send(";;;;;")    
})
*/

app.use("/apple",(req,res)=>{
  res.send("apple");
});

// localhost:3000/apple
app.use("/orange",(req,res)=>{
    res.send("orange");
});
// localhost:3000/orange
//if no exit rount use path as " * " .
  
