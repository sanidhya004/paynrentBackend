
var multer=require('multer')


const storage= multer.diskStorage({
     destination:(req,file,path)=>{
         console.log(file)
         path(null,'public/images')
     },
     filename:(req,file,path)=>{
         path(null,file.originalname)
     }
})
const upload= multer({storage:storage});

module.exports=upload;