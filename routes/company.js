var express = require('express');
var router = express.Router();
var pool = require("./pool");
var upload= require('./multer');

router.post('/addcompany',upload.single('icon'),function(req,res,next){
     
     pool.query('Insert into company ( companyname, categoryid, subcateoryid, icon) values(?,?,?,?)',[req.body.companyname,req.body.categoryid,req.body.subcategoryid,req.file.filename],function(error,result){
        
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
router.get('/displaycompany',function(req,res,next){
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
router.post('/deletecompany',function(req,res,next){
    console.log(req.body)
    pool.query('DELETE FROM paynrent.company WHERE companyid=?',[req.body.companyid],function(error,result){
          
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
router.post('/updatecompany',upload.single('icon'),function(req,res,next){
    console.log(req.body)
    
    pool.query('Update company Set companyname=?, icon=? where companyid=?',[req.body.companyname,req.file.filename,req.body.companyid],function(error,result){
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
  
module.exports=router;