//Enter a name with minimum of length 10, and is the user give the valid name then take the age, and the route all the page


const express = require('express')
const app = express()
const port = 3005
const reqFilter = (req,res,next)=>{
  if(!req.query.name){
    res.send('Please enter a name minimum word length is 10.');
  }
  else if(req.query.name.length<10){
    res.send("Please enter a valid name.");
  }
  else if(!req.query.age){
    res.send("please enter your age.");
    
  } 
  else{
    next();
  }
}

app.use(reqFilter);

app.get('/',(req, res)=>{
  res.send("Welcome to home page my name is Sk Anjarul Hossain")
})
app.get('/about',(req, res)=>{
  res.send("Welcome to the about page")
})
app.get('/contact',(req, res)=>{
  res.send("Welcome to contact page")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// to view the functionality we need to write localhost:3005/?name=Sk anjarul hossain&age=23
