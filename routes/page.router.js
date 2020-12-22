const { Routes, Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  
    res.render('index', { title: 'TermProject', username: 'HAEUN-JANG' });
});

router.get('/write',(req,res)=>{
    res.render('write');
});
module.exports = router;
