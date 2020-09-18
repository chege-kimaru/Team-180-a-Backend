const classModel = require('../models/Class');
const { NotFoundError } = require('../utils/errors');

exports.findClassById = async (classId) => {
  const mclass = await classModel.findById(classId);
  if (mclass) {
    return mclass;
  }
  throw new NotFoundError('This class does not exist');
};
