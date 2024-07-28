# ExpressJS
This repo is all about my learning of Express and pratice code included.

Installing and Initializing the express :
![image](https://github.com/user-attachments/assets/d84d1bda-a6c0-436f-ab90-629c79146fa8)

Ports : ports are logical endpoints of a network connection that is used to exchange information between web server and a web client.

Nodemon Install : 
// nodemon automatically start server with code changes
/*
PS C:\Users\vicky\OneDrive\main\WebDev> nodemon index.js
[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
app is listening
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Hello

*/

// path parameters
/*

app.get("/:variablename/:var2...",(req,res)=>{
   console.log(req.params(any varible is came as parameter will store in req onject as params))    
})
localhost:----/varname/varname2...
*/

parametr and query 
app.get("/:username/:id",(req,res)=>{
   console.log(req.params);
   let {username,id}=req.params;
   let htmlstr=id;
   res.send(htmlstr);
});
//query string
// req.query
/*
app.get("/search",(req,res)=>{
   console.log(req.query);
});
*/












