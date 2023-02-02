var express = require('express');
var router = express.Router();
var pool= require('./pool')
var upload= require('./multer')
const {request}=require('express')

router.post('/categorysubmit',upload.single('icon'),function(req,res,next){
     console.log(req.body)
     console.log(req.file)
     pool.query('insert into category(categoryname,icon) values(?,?)',[req.body.categoryname,req.file.filename],function(error,result){
         if(error)
         {

         console.log(error)
         res.status(500).json({status:false})
   
         }
         else if(result)
         {
            console.log(result)
            res.status(200).json({result:result,status:true})
         }
     })
} )




module.exports=router ;
