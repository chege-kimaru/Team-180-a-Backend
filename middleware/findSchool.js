const { NotFoundError } = require('../utils/errors');
const { findSchoolById } = require('../services/schoolService');
const { responseHandler } = require('../utils/responseHandler');

exports.findSchool = async (req, res, next) => {
  try {
    await findSchoolById(req.params.schoolId);
    return next();
  } catch (e) {
    if (e instanceof NotFoundError) {
      return responseHandler(res, e.message, 404, false, e.message);
    }
    return responseHandler(res, e.message, 500, false, e.message);
  }
};
