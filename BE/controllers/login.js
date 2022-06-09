const { Users } = require('../models/user');
const jwt = require('jsonwebtoken');
const { ACCESS_SECRET, REFRESH_SECRET } = process.env;

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 POST /login 구현에 필요한 로직을 작성하세요.
  const userInfo = await Users.findOne({
    where: { userId: req.body.userId, password: req.body.password },
  });

  if (!userInfo) {
    res.status(400).json({data: null, message: 'not authorized'});
  } else {
    const {password, ...userData} = {...userInfo.dataValues}
    const accessToken = jwt.sign(userData, ACCESS_SECRET, { expiresIn: "10m" });
    const refreshToken = jwt.sign(userData, REFRESH_SECRET, { expiresIn: "1d" });
    res.cookie('refreshToken', refreshToken);
    res.status(200).json({data: {accessToken: accessToken}, message: 'ok'});
  }
};