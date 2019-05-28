const express = require('express');
const app = express();


//using router
app.use(require('./router'))

//server
const PORT = process.env.PORT || 3000;
app.listen( PORT, ()=>{
       console.log('server listening in port '+ PORT);
});