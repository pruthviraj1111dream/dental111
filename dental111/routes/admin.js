var express=require('express');
var router=express.Router();
var query1=require('../db.js');

router.get('/',async(req,res)=>{
// res. send('Welcome Admin Panal');
res.render('admin/login.ejs');
})
router.post('/login_check',async(req,res)=>{
var {username, password}=req.body;
var sql='select * from login where username =? and password =? ';
var data=await query1(sql, [username, password]);
if(data){
req.session.lid=data[0].lid
req.session.admin_name=data[0].admin_name
res.redirect('/admin/index');
}else{
res.redirect('/admin/');
   }
});
router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/admin');
})
router.get('/forgot',(req,res)=>{
    res.render('admin/forgot.ejs');
})
router.get('/index',(req,res)=>{
    var name=req.session.admin_name;
    // res. send (name);
    res.render('admin/index.ejs',{aname:name});
})
router.get('/dentalsolutions', async (req, res) => {
    var sql = 'select * from dentalsolutions';
    var data = await query1(sql);
    res.render('admin/DentalSolutions.ejs', {data:data});
})
router.post('/dentalsolutions_save',async(req,res) =>{
    // res.send(req.body);
    var{title,desc}=req.body;
var sql='insert into dentalsolutions(title,descprition)value(?,?)';
var data=await query1(sql,[title,desc]);
// res.send(data);
res.redirect('/admin/dentalsolutions');
})
router.get('/DentalSolutions_delete/:id',async(req,res)=>{
var id=req.params.id;
var sql='delete from dentalsolutions where ds_id=?';
var data=await query1(sql,[id]);
res.redirect('/admin/DentalSolutions')
})
router.get('/DentalSolutions_edit/:id',async(req,res)=>{
var id=req.params.id;
var sql='select * from dentalsolutions where ds_id -? ';
var data=await query1(sql,[id]);
res.render('admin/DentalSolutions_edit.ejs', {data:data[0]});
})
module.exports=router;