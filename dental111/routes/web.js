var express=require('express');

var router=express.Router();

router.get('/',(req,res)=>{
// res. send( 'Welcome Website Panal');
res. render('web/index.ejs');
})
router.get('/Whyus',(req,res)=>{
// res. send( 'Welcome Website Panal');
res. render('web/Whyus.ejs');
})
router.get('/Service',(req,res)=>{
// res. send( 'Welcome Website Panal');
res. render('web/Service.ejs');
})
router.get('/team',(req,res)=>{
// res. send( 'Welcome Website Panal');
res. render('web/team.ejs');
})
router.get('/Pricing',(req,res)=>{
// res. send( 'Welcome Website Panal');
res. render('web/Pricing.ejs');
})
router.get('/dentalsolutions',(req,res)=>{
// res. send( 'Welcome Website Panal');
res. render('web/dentalsolutions.ejs');
})

module.exports=router;