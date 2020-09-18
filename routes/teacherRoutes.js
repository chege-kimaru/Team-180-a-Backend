const router = require('express').Router();
const teacherController = require('../controllers/teacherController');
const { findTeacher } = require('../middleware/findTeacher');
const { findSchool } = require('../middleware/findSchool');
const { findClass } = require('../middleware/findClass');

router.get('/teachers', teacherController.getTeachers);

router.get(
  '/teachers/:teacherId',
  findTeacher,
  teacherController.getTeacherDetails
);

router.get(
  '/teachers/:teacherId/schools',
  findTeacher,
  teacherController.getTeacherSchools
);

router.get(
  '/teachers/:teacherId/classes',
  findTeacher,
  teacherController.getTeacherClasses
);

router.get(
  '/teachers/:teacherId/schools/:schoolId/classes',
  findTeacher,
  findSchool,
  teacherController.getTeacherClassesInSchool
);

router.get(
  '/teachers/:teacherId/subjects',
  findTeacher,
  teacherController.getTeacherSubjects
);

router.get(
  '/teachers/:teacherId/schools/:schoolId/subjects',
  findTeacher,
  findSchool,
  teacherController.getTeacherSubjectsInSchool
);

router.get(
  '/teachers/:teacherId/classes/:classId/subjects',
  findTeacher,
  findClass,
  teacherController.getTeacherSubjectsInClass
);

module.exports = router;
