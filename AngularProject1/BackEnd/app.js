const express = require('express');
const cors = require('cors');
const logger = require('morgan');// for seeing api calls in terrminal
const PORT = 8000
const mongoose = require('mongoose')

const app = new express()
app.use(cors()) // to connect fe and be without any distrubance
app.use(express.json)// to serve data from FE
app.use(express.urlencoded({extended:true}))// for file passage
app.use(logger('dev'))


mongoose.connect('mongodb+srv://aparna9115:appu9115@cluster0.pw5gtqz.mongodb.net/CaseStudy2?retryWrites=true&w=majority')
.then(()=>{
    console.log('MongoDB connected successfully');
})
.catch(error=>{
    console.log('Connection Error'+error)
})





app.listen(PORT,()=>{
    console.log('............Server is running on port 8000............')
})