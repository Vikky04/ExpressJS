const express=require("express");
const app=express();
// console.dir(app);
let port=3000;
app.listen(port,()=>{
    console.log("app is listening");
});
// Handling Request 
//request receive
app.use((req,res)=>{//req,res object by default by express
    console.log("request");
    // res.send("response");//used to send response string ,num object antything
    res.send("<h1>hello</h1>");//response at a time one line not one thing

  });

// response
