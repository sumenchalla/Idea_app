const express = require("express");
const serverconfig = require("./config/server.config")
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config")



const app =express()

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error",()=>{
    console.log("Error occure while conntecting the database");
})
db.once("open",()=>{
    console.log("Db has been connected successfully");
})
app.listen(serverconfig.port,()=>{
    console.log(`server started on the port number ${serverconfig.port}`)
})