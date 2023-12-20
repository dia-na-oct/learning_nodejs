const express=require('express');
const app=express();
const blogroute=require('./route/blogroutes');



/**___________mongodb______________________**/
const  MongoClient = require('mongoose');
const { render } = require('ejs');
const uri = confi.uri
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        app.listen(7000);
        console.log('Connected to db');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

//register via engine
app.set('view engine','ejs');// ejs to create our template

app.use(express.urlencoded({extended:true}));



//blog routes
app.use((req,res,next)=>{
    console.log(req.hostname);
    next();
 });

app.get('/',(req,res)=>{
res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});
});

app.use('/blogs',blogroute);
app.use((req,res)=>{
   res.status(404).render('404');
});

