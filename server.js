const express = require("express");
const serverconfig = require("./config/server.config")



const app =express()


app.listen(serverconfig.port,()=>{
    console.log(`server started on the port number ${serverconfig.port}`)
})