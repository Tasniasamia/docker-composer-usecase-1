const express=require("express")
const os=require("os")

const app=express();
const port=5050;

const INSTANCE=process.env.INSTANCE_NAME || os.hostname();

app.get("/",(req,res)=>{
    res.send(`Hello World ${INSTANCE}`)
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})