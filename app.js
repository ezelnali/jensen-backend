const credentials = {secretUser:"user" , secretPwassword:"password"}
const cors = require("cors")
const express = require("express")
const app = express()
process.env.PORT = 3000
 
 app.use(cors())
 app.get("/", (req ,res)=>{
     const encodeAuth = (req.headers.authorization || '')
        .split(' ') [1] || '' //fråga vad detta betyder
      
     const [name, pwassword] = Buffer.from(encodeAuth, 'base64')
        .toString().split(':')
        if(user===credentials.secretUser && password===credentials.secretPwassword){
            res.status(200).send({"STATUS":"SUCCESS"})
        }else{
            res.set('WWW-Authenticate' , 'Basic realm="Access To Index"')
            res.status(401).send("Unauthorised access")
       }  
    })

app.listen(3000 , ()=>{
    console.log(`STARTED LISTENING ON PORT${process.env.PORT}`)
}); 