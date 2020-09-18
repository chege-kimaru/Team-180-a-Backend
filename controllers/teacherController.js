/* eslint-disable implicit-arrow-linebreak */
const teacherService = require('../services/teacherService');
const { responseHandler } = require('../utils/responseHandler');

exports.getTeachers = async (req, res) =>
  responseHandler(
    res,
    'Get Teachers',
    200,
    true,
    await teacherService.getTeachers()
  );

exports.getTeacherDetails = async (req, res) =>
  responseHandler(
    res,
    'Get Teacher Details',
    200,
    true,
    await teacherService.getTeacherById(req.params.teacherId)
  );

exports.getTeacherSchools = async (req, res) =>
  responseHandler(
    res,
    'Get Teacher Schools',
    200,
    true,
    await teacherService.getTeacherSchools(req.params.teacherId)
  );

exports.getTeacherClasses = async (req, res) =>
  responseHandler(
    res,
    'Get Teacher classes',
    200,
    true,
    await teacherService.getTeacherClasses(req.params.teacherId)
  );

exports.getTeacherClassesInSchool = async (req, res) =>
  responseHandler(
    res,
    'Get Teacher classes in school',
    200,
    true,
    await teacherService.getTeacherClassesInSchool(
      req.params.teacherId,
      req.params.schoolId
    )
  );

exports.getTeacherSubjects = async (req, res) =>
  responseHandler(
    res,
    'Get Teacher subjects',
    200,
    true,
    await teacherService.getTeacherSubjects(req.params.teacherId)
  );

exports.getTeacherSubjectsInClass = async (req, res) =>
  responseHandler(
    res,
    'Get Teacher subjects in class',
    200,
    true,
    await teacherService.getTeacherSubjectsInClass(
      req.params.teacherId,
      req.params.classId
    )
  );

exports.getTeacherSubjectsInSchool = async (req, res) =>
  responseHandler(
    res,
    'Get Teacher subjects in school',
    200,
    true,
    await teacherService.getTeacherSubjectsInSchool(
      req.params.teacherId,
      req.params.schoolId
    )
  );
