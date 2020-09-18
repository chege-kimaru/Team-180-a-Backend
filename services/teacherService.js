const teacherModel = require('../models/Teacher');
const classModel = require('../models/Class');
const { NotFoundError } = require('../utils/errors');

exports.getTeachers = () => teacherModel.find();

exports.getTeacherById = async (teacherId) => {
  const teacher = await teacherModel.findById(teacherId);
  if (teacher) {
    return teacher;
  }
  throw new NotFoundError('This teacher does not exist');
};

// In the following functions below, no need to chek if the teacher exists. This will be
// handles by a middleware

exports.getTeacherSchools = async (teacherId) => {
  const teacher = await teacherModel
    .findById(teacherId)
    .select()
    .populate('schools');
  return teacher.schools;
};

exports.getTeacherClasses = async (teacherId) => {
  const teacher = await teacherModel
    .findById(teacherId)
    .select()
    .populate('classes');
  return teacher.classes;
};

exports.getTeacherClassesInSchool = async (teacherId, schoolId) => {
  const teacher = await teacherModel
    .findById(teacherId)
    .select()
    .populate({ path: 'classes', match: { schoolId } });
  return teacher.classes;
};

exports.getTeacherSubjects = async (teacherId) => {
  const teacher = await teacherModel
    .findById(teacherId)
    .select()
    .populate('subjects');
  return teacher.subjects;
};

exports.getTeacherSubjectsInClass = async (teacherId, classId) => {
  const teacher = await teacherModel
    .findById(teacherId)
    .select()
    .populate({ path: 'subjects', match: { classes: { $in: [classId] } } });
  return teacher.subjects;
};

exports.getTeacherSubjectsInSchool = async (teacherId, schoolId) => {
  let classesInSchool = await classModel
    .find()
    .where('schoolId')
    .equals(schoolId)
    .select('classes');
  classesInSchool = classesInSchool.map((mclass) => mclass._id);
  const teacher = await teacherModel.findById(teacherId).populate({
    path: 'subjects',
    match: { classes: { $in: classesInSchool } },
  });

  return teacher.subjects;
};
