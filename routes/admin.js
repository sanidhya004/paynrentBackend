 
 var express=require('express');

 var router=express.Router();
 var pool=require('./pool')
 router.post('/check_admin_login',function(req,res,next){
    pool.query('select * from administration where(emailid=? or mobileno=?) and password=?',[req.body.emailid,req.body.emailid,req.body.password],function(error,result){
        if(error)
        {
  
        console.log(error)
        res.status(500).json({status:false})
  
        }
        else if(result)
        {
           if(result.length==1)
           res.status(200).json({status:true})
           else{
             res.status(500).json({status:true,message:'indvalid emailid/password'})
           }
        }
    })
 })
 module.exports=router
