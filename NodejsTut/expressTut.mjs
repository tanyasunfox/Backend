  import express from 'express';
  const app=express();
  app.use(express.json())

  const port=5000;

  app.get('/',(req,res)=>{
    
    res.json({msg:'error'})
  });


  app.get('/about/:id',(req,res)=>{
   console.log(req.params)
    res.send("About");
  }); 
    
  
  app.get('/about',(req,res,next)=>{
    console.log(req,res)
    console.log("Another way to use middleware");
    next();

  },(req,res)=>{
    console.log(req.query)
    res.json({message:`your name of query is ${req.query.page}`});
     
  });

  
app.use(logger)                    //middleware
app.post('/login',(req,res)=>{    
console.log(req.body);
const {username,userPass}=req.body;
res.json({message:`Hello ${username}`});
})

app.get('/auth',authorization,(req,res)=>{
  res.send("Authorization page");

})

function logger(req,res,next)      //middleware
{                   
  console.log("user has logged in");
  next();

}

function authorization(req,res,next){
  console.log("user is authorized");
  next();

}
  app.listen(port,()=>
  {
    console.log(`app is listening to port ${port}`);
  })
  