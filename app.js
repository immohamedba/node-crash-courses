const { render } = require('ejs');
const express = require('express');
const app = express();
// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'my views')
// listen for request
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    //res.sendFile('./views/index.html', { root: __dirname }) // it's relative path, we should especify the route directorie
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title :' Home', blogs})
});
app.get('/about', (req, res) => {
    //res.send('<p>About Page</p>')
   // res.sendFile('./views/about.html', { root: __dirname })
   res.render('about', {title :' About'})
});
/* redirect
app.get('/about-us', (req, res)=>{
    res.redirect('/about')
})
*/
app.get('/blogs/create', (req, res)=>{
    res.render('create',{title :' Create, '})
})

// 404 page 
app.use((req, res)=>{
   // res.status(404).sendFile('./views/404.html', { root: __dirname })
   res.status(404).render('404', {title :' 404'})
})