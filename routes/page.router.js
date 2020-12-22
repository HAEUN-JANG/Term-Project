const { Routes, Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    //db에서 user 정보를 가져오는 코드 작성(db쓸경우)
    res.render('index', { title: 'TermProject', username: 'HAEUN-JANG' });
});
//내가 만약 회원가입 페이지가 필요하다!
router.get('/write',(req,res)=>{
    res.render('write');
});
module.exports = router;
