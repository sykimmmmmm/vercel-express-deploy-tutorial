const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send('express on vercel'))

app.listen(3001,()=>console.log('server ready on port 3000'))

module.exports = app;