require('dotenv').config()
const express=require('express')
const app=express()
//place for the server to llisten
const port =3000 


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
  res.send('tammydotcom')
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
//we just made a server
//once we start our application we have to restart (run the script) everytime to see changes

app.get('/login',(req,res)=>{
 res.send('<h1>Happy Coding</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})
