const express =require("express");

const path=require("path")

const bodyParser =require("body-parser");

const app = express();

const port =1000;

const router = require("./userRoutes");

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());

app.use(router);


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});






app.listen(port,()=>{
    console.log(`server is working on port:${port}`);
})