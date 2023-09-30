const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Hello My name is Sk Anjarul Hossain how are you. I think you are fine. okk good by ')

  
})

app.post('/', (req, res) => {
  res.send("Got a post request")
})

app.put('/user', (req, res) => {
  res.send("Got a put request from /user")
})


app.delete('/update', (req, res) => {
  res.send("Got a delete request from /update")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})