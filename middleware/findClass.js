const { NotFoundError } = require('../utils/errors');
const { findClassById } = require('../services/classService');
const { responseHandler } = require('../utils/responseHandler');

exports.findClass = async (req, res, next) => {
  try {
    await findClassById(req.params.classId);
    return next();
  } catch (e) {
    if (e instanceof NotFoundError) {
      return responseHandler(res, e.message, 404, false, e.message);
    }
    return responseHandler(res, e.message, 500, false, e.message);
  }
};
