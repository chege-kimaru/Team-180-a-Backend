const schoolModel = require('../models/School');
const { NotFoundError } = require('../utils/errors');

exports.findSchoolById = async (schoolId) => {
  const school = await schoolModel.findById(schoolId);
  if (school) {
    return school;
  }
  throw new NotFoundError('This school does not exist');
};
