import express from "express";
// import cors from "cors";

const app = express();
app.use(express.json());

const tasks = [];

app.get("/", (req,res)=>{
         res.json({
            message:"Hola",
        });
}); 
 
app.get("/retogithub",(req,res)=>{
     res.json({
        message:"Holaaa",

    });
});


app.listen(4000);