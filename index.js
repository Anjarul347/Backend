const express = require('express')
const app = express()
const port = 3000
const reqFilter = (req,res,next)=>{
  // console.log('reqFilter');
  if(!req.query.age){
    res.send('please enter your vaalid age.')
  }
  else if(req.query.age<18){
    res.send("You cannot access this Website")
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



// app.get('/', (req, res) => {
//   res.send('Hello My name is Sk Anjarul Hossain how are you. I think you are fine. okk good by ')

  
// })

// app.post('/home', (req, res) => {
//   res.send("Got a post request")
// })

// app.put('/user', (req, res) => {
//   res.send("Got a put request from /user")
// })


// app.delete('/update', (req, res) => {
//   res.send("Got a delete request from /update")
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// for view the functionality of the middlware function you need to write in the "localhost:3000/?age=20", "localhost:3000/about?age=20","localhost:3000/contact?age=20"