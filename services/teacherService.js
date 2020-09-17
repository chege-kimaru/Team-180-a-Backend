const teacherModel = require('../models/Teacher');
const { NotFoundError } = require('../utils/errors');

exports.getTeachers = () => teacherModel.find();

exports.getTeacherById = async (teacherId) => {
  const teacher = await teacherModel.findById(teacherId);
  if (teacher) {
    return teacher;
  }
  throw new NotFoundError('This teacher does not exist');
};

exports.getTeacherSchools = async (teacher) => teacher.schools;

exports.getTeacherClasses = async (teacher) => teacher.classes;

exports.getTeacherClassesInSchool = async (teacher, schoolId) => {
  const teacherClasses = await teacher.classes;
  return teacherClasses.filter((mclass) => mclass.schoolId === schoolId);
};
