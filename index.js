const express=require('express');
const path=require('path')
const ejsMate=require('ejs-mate')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const app=express()
const Event=require('./modules/events')
const Event2=require('./modules/events2')


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')));
app.engine('ejs',ejsMate)




app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true})); 

mongoose.connect('mongodb://localhost:27017/fantsea',{useNewUrlParser:true,useUnifiedTopology: true });
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error'));
db.once('open',()=>{
  console.log('database connected');
})




app.get('/home',(req,res)=>{
    res.render('pages/home.ejs')
})


//event


app.get('/events',(req,res)=>{                   
    res.render('pages/events.ejs')
})


//events2


app.get('/events2',(req,res)=>{                              //events2
    res.render('pages/events2.ejs')
})


//contact


app.get('/contact',(req,res)=>{                             
    res.render('pages/contact')
})

//about

app.get('/about',(req,res)=>{                                 
    res.render('pages/about')
})
app.get('/addevents',async(req,res)=>{                       
    res.render('pages/addevents.ejs')
})

//addevents


app.get('/addevents2',async(req,res)=>{
    res.render('pages/addevents2.ejs')
})

//events show


app.get('/events/:id',async(req,res)=>{
    const {id}=req.params
      res.render('pages/showevents')
})

//events2 show


app.get('/events2/:id',async(req,res)=>{
    const {id}=req.params
    res.render('pages/showevents2')
     
})
app.listen(3000,(req,res)=>{
    console.log('listening on port 3000');
})