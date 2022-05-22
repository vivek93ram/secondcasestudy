const express = require('express'); 

const bodyParser = require('body-parser');   // Part #1 Point 1 - body parser has not been required                      

const path = require ('path'); 
const cors = require('cors');

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');          // Part #1 Point 3 - Changed 'homeroute' to 'homerouter' 
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 
app.use(express.urlencoded({entended: true}));      // Part #1 Point 2 - Line 34 and 35 added
app.use(express.json());


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res)
{

    res.render('index',{});
    
});


app.listen(5000,()=>{
    console.log("Server Ready on 5000");    // Part #1 Point 5 - Changed port information within console.log to 5000
});