const express = require('express'),
app=express(),
monodb = require('mongodb'),
mongoose = require('mongoose'),
port = Process.env.port || 3000;

app.listen(port, function(err,success)
{
    if (err){
        console.log(err);
    }else
    {
        console.log("Hello you are connected");
    }
})



