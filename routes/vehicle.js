var express = require('express');
var router = express.Router();
var pool = require("./pool");
var upload= require('./multer');

router.post('/addmodel',upload.single('icon'),function(req,res,next){
  console.log(req.body)
  pool.query('Insert into vehicle (categoryid, subcategoryid, companyid, modelid, vendorid, registrationnumber, color, fueltype, ratings, average, remarks, capacity, status, feature, orignalpicture) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.categoryid ,req.body.subcategoryid, req.body.companyid, req.body.modelid, req.body.vendorid, req.body.registrationnumber, req.body.color, req.body.fueltype, req.body.ratings, req.body.average, req.body.remarks, req.body.capacity, req.body.status, req.body.feature, req.file.filename],function(error,result){
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
router.post('/deletevehicle',function(req,res,next){
  console.log(req.body)
  pool.query('DELETE FROM paynrent.vehicle WHERE vehicleid=?',[req.body.vehicleid],function(error,result){
        
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
router.post('/updatevehicle',upload.single('icon'),function(req,res,next){
  console.log(req.body)

  pool.query('Update paynrent.vehicle Set categoryid=?,subcategoryid=?,orignalpicture=?,color=?,registrationnumber=? where vehicleid=?',[req.body.categoryid,req.body.subcategoryid,req.file.filename,req.body.color,req.body.registrationnumber,req.body.vehicleid,],function(error,result){
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