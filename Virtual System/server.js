const express = require('express')
// require('dotenv').config()
const mongoose = require('mongoose')
const app = express()

const Routers = require('./routes/routes')

app.use(express.json())

app.use('/virtual_education', Routers)

//  mongoose.connect(process.env.DATABASE_URL).then( ()=>{
 mongoose.connect( "mongodb://127.0.0.1:27017/virtual_education").then( ()=>{

    console.log('Database is connected Successfully')

 })
 .catch((e) => console.error('Failed to open Database' + e)
 )

const port = process.env.PORT || 5000;

app.listen(port, () => 
console.log(`Server running on port ${port} 🔥`));

