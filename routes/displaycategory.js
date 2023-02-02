var express = require('express');
var router = express.Router();
var pool = require("./pool");
var upload= require('./multer')

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
router.get('/displaysubcategory',function(req,res,next){
  pool.query('Select * from subcategory',function(error,result){
     
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
router.get('/displaysubcategoryforselect',function(req,res,next){
  console.log(req.body)
  pool.query('Select * from subcategory ',function(error,result){
     
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
router.get('/displaycategoryforselect',function(req,res,next){
  pool.query('Select categoryid, categoryname from category',function(error,result){
     
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
router.post('/deletecategory',function(req,res,next){
  console.log(req.body)
  pool.query('DELETE FROM paynrent.category WHERE categoryid=?',[req.body.categoryid],function(error,result){
        
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
router.post('/updatecategory',upload.single('icon'),function(req,res,next){
  console.log(req.body)
  console.log(req.file)
  pool.query('Update paynrent.category Set categoryname=?, icon=? where categoryid=?',[req.body.categoryname,req.file.filename,req.body.categoryid],function(error,result){
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
