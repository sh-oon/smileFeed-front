// 로그인 미들웨어
// 로그인이 되어있지 않으면 로그인 페이지로 리다이렉트
// 로그인이 되어있으면 다음 미들웨어로 넘어감
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

}