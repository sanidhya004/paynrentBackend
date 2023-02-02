var express = require('express');
var router = express.Router();
var pool= require('./pool')


router.get('/getfeatured',function(req,res,next){
    pool.query('Select * from featured',function(error,result){
     
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
router.get('/getcode',function(req,res,next){
    pool.query('Select * from codes',function(error,result){
     
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