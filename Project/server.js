require('dotenv').config()
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const subscribersRouter = require('./routes/subscribers')


// mongoose.connect(process.env.DATABASE_URL, () =>
// {
//   console.log("Connected to Database")
// },
// e => console.error(e)
// )

mongoose.connect(process.env.DATABASE_URL).then( ()=>
{
    console.log("Database Connected");
})
.catch((e)=>
{
    
    console.log("Failed to connect Database" + e) 

  });

app.use(express.json())

app.use('/subscribers', subscribersRouter)

app.listen(4500, () => console.log('Port has started'));

