let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')

let api_routes = require('./routes/api.js')

//App configuration
let app = express()

app.use(express.static(path.join(__dirname, 'student_sign_in_client', 'dist')))

app.use(bodyParser.json())

app.use('/api', api_routes)


//Error handler
app.use(function(reg, res, next, err){
    res.status(404).send('Not found')
})

//Error handler
app.use(function (err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Server error')
})

//Start server
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})