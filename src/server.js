const express = require('express')
const paymentsRoutes = require('./routes/payments')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express();
const port = 3000;

// mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/api',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log(`db is connected`))
    .catch(err=>console.log(err))


app.get('/',(req, res)=>{
    res.send('Hola Mundo')
})

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())


//routes
app.use('/api', [paymentsRoutes])


app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})