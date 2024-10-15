import express from "express";


const app = express();

const PORT = 5000;

// middleware
express.json();

// call the database connection


// call user routes


app.listen(PORT,()=>{
    console.log(`server is working on ${PORT} `);
})