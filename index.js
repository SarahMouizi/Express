const express = require ('express')
const {addDate} = require('./middelwear/date')



const app = express()


const port = 3000



//route avec middelwear
app.get('/middelwear', addDate ,(req,res)=>{
    res.send('message' + req.date + req.day)
})

//route sans middelwear
app.get('/nomiddelwear', (req,res)=>{
    res.send('sans middelwear' + req.date)
})


app.get('/',(req,res)=>{
    res.send('hello sarra')
})

//app.use('/static', express.static(__dirname + '/public'))
//app.use('/static',express.static(__dirname+'/pages'))

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + "/pages/home.html")
});

app.get('/contacts', (req,res)=>{
    res.sendFile(__dirname + "/pages/contacts.html")
});

app.get('/services', (req, res)=>{
    res.sendFile(__dirname + "/pages/services.html")
});

app.get('/index', (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html")
});



app.listen(port, (err)=>{
    err?console.log(err):console.log(`go to localhoost ${port}`)

});