const { render } = require('ejs');
const express = require('express');
const morgan = require('morgan');
const mongosose = require('mongoose');
const { default: mongoose } = require('mongoose');
const blogRouter = require('./routes/blogRoutes')
const { result } = require('lodash');

const app = express();
// connect Mongo db
const dbUri = 'mongodb+srv://MedBa:1005033Med@atlascluster.3uifz.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');
//listen for request
app.use(express.static('public-folder'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

/*
app.get('/add-blog', (req, res) => {
    // creating a new blog
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog 2',
        body: 'more about my blog 2 '
    });
    // saving blog
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})
app.get('/all-blogs', (req, res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/single-blog', (req, res)=>{
    Blog.findById('62d710759f9d4532b0a6ce09')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})*/
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next(); // move on..
});

/*app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: ' Home', blogs })
});*/
app.get('/', (req, res) => {
    res.redirect('/blogs')
});


app.get('/about', (req, res) => {
    res.render('about', { title: ' About' })
});



app.use((req, res, next) => {
    console.log('in the next middleware');
    next(); // move on..
});
/*app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' })
})*/
 app.use('/blogs',  blogRouter);
// 404 page 
app.use((req, res) => {
    res.status(404).render('404', { title: ' 404' })
})