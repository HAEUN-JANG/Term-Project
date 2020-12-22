const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');
const createError = require('http-errors');
const pageRouter = require('./routes/page.router');

const app = express();  // express Application 객체 생성
const PORT = process.env.PORT
nunjucks.configure('views', {
    express: app,
    watch: true
});

app.set('view engine', 'html');
// 커스텀 미들웨어 등록
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', pageRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.status = err.status;
    res.render('error');
});
// 루트 경로(/)로 GET 요청이 왔을 경우 응답

app.listen(PORT, () => console.log('Server running on 3000!'));
