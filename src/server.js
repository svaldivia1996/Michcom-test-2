const express = require('express')
const paymentsRoutes = require('./routes/payments')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')

const app = express();
const port = process.env.PORT || 3000

const apiLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: 'Too many request, wait 5 minutes'
})

// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost/api',{
mongoose.connect('mongodb+srv://UserTest:KdNDYpK36qniL6ke@cluster0.tovt5.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log(`db is connected`))
    .catch(err=>console.log(err))


// app.get('/',(req, res)=>{
//     res.send('Hola Mundo')
// })

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/api/', apiLimiter)


//routes
app.use('/api', [paymentsRoutes])


app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})