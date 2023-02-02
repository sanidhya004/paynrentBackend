var express = require('express');
var router = express.Router();
var pool= require('./pool')
router.get('/displayoffer',function(req,res,next){
    console.log(req.body)
    pool.query('Select * from offers ',function(error,result){
       
           if (error) {
             console.log(error);
             res.status(500).json({status:false});
           } 
           else if (result) {
             console.log(result);
             res.status(200).json({ data:result,status:true});
           }
         
    })
  })
  module.exports=router