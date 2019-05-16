const createError = require('http-errors');
const db = require('../models/db');

const authen = (req, res, next) => {
  const user_sid = req.cookies.user_sid;

  if (user_sid) {
    const sid = user_sid.match(new RegExp('s:(.*?)\\.'))[1];
    db.one(
      'SELECT sid, sess, expire FROM public."Sessions" WHERE expire > NOW() AND sid=$1',
      [sid]
    )
      .then(function(data) {
        console.log(data);
        return next();
      })
      .catch(function(error) {
        return next(createError(401));
      });
  } else {
    return next(createError(401));
  }
};

module.exports = authen;
