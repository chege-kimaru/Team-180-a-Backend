const { NotFoundError } = require('../utils/errors');
const { getTeacherById } = require('../services/teacherService');
const { responseHandler } = require('../utils/responseHandler');

exports.findTeacher = async (req, res, next) => {
  try {
    await getTeacherById(req.params.teacherId);
    return next();
  } catch (e) {
    if (e instanceof NotFoundError) {
      return responseHandler(res, e.message, 404, false, e.message);
    }
    return responseHandler(res, e.message, 500, false, e.message);
  }
};
