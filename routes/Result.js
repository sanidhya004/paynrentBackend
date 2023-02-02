const { Router } = require('express');
var express = require('express');
var router = express.Router();
var pool= require('./pool')
router.get('/displaycategory',function(req,res,next){
    
    pool.query('Select * from category',function(error,result){
       
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
router.get('/displaybrands',function(req,res,next){
    
    pool.query('Select *  from company',function(error,result){
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
router.get('/displayvehicle',function(req,res,next){
    console.log(req.body)
    pool.query('Select * from vehicle  ',function(error,result){
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

module.exports=router;