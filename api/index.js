const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./User')

console.log('몽고아틀라스주소: ',process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('데이터베이스 연결 성공'))
.catch(e => console.log(`데이터베이스 연결 실패 ${e}`))

app.get('/',(req,res)=>res.send('express on vercel'))

app.post("/user", (req, res) => {
    // user 데이터 생성 테스트
    const user = new User({
        name: '사용자',
        email: 'user123@gmail.com',
        userId: 'user',
        password: 'abcde123@' 
    })
    user.save()
    .then(() => {
        console.log('회원가입 성공!')
        res.json({ newUser: user })
    })
    .catch(e => {
        console.log(e)
        res.status(400).json({ code: 400, message: 'Invalid User Data'})
    })
})

app.listen(3001,()=>console.log('server ready on port 3000'))

module.exports = app;
