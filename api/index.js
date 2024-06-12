const express = require('express');
const mongoose = require('mongoose');
const app = express();
console.log('몽고아틀라스주소: ',process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('데이터베이스 연결 성공'))
.catch(e => console.log(`데이터베이스 연결 실패 ${e}`))

app.get('/',(req,res)=>res.send('express on vercel'))

app.listen(3001,()=>console.log('server ready on port 3000'))

module.exports = app;
