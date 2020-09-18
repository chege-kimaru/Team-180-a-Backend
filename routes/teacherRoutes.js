const router = require('express').Router();
const teacherController = require('../controllers/teacherController');
const { findTeacher } = require('../middleware/findTeacher');
const { findSchool } = require('../middleware/findSchool');
const { findClass } = require('../middleware/findClass');

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teachers' endpoints
 */

/**
 * @swagger
 * path:
 *  /teachers:
 *    get:
 *      summary: Get all teachers
 *      tags: [Teachers]
 *      responses:
 *        "200":
 *          description: Successful retrieved all teachers
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: Signifies if the operation was a success
 *                  message:
 *                    type: string
 *                    description: Operation message
 *                  data:
 *                       type: array
 *                       items:
 *                          $ref: '#/components/schemas/Teacher'
 */

router.get('/teachers', teacherController.getTeachers);

/**
 * @swagger
 * path:
 *  /teachers/{teacherId}:
 *    get:
 *      summary: Get all teachers
 *      tags: [Teachers]
 *      parameters:
 *        - name: teacherId
 *          in: path
 *          description: Id of teacher to get their details
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *      responses:
 *        "200":
 *          description: Successful retrieved all teachers
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: Signifies if the operation was a success
 *                  message:
 *                    type: string
 *                    description: Operation message
 *                  data:
 *                     $ref: '#/components/schemas/Teacher'
 *        "404":
 *          description: Teacher Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to false
 *                  message:
 *                    type: string
 *                    description: not found error message
 *                  data:
 *                     type: string
 *                     description: not found error message
 */
router.get(
  '/teachers/:teacherId',
  findTeacher,
  teacherController.getTeacherDetails
);

/**
 * @swagger
 * path:
 *  /teachers/{teacherId}/schools:
 *    get:
 *      summary: Get schools that this teacher teaches in
 *      tags: [Teachers]
 *      parameters:
 *        - name: teacherId
 *          in: path
 *          description: Id of teacher to get their schools
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *      responses:
 *        "200":
 *          description: Successful retrieved teacher schools
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to true
 *                  message:
 *                    type: string
 *                    description: Operation message
 *                  data:
 *                     type: array
 *                     items:
 *                        $ref: '#/components/schemas/School'
 *        "404":
 *          description: Teacher Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to false
 *                  message:
 *                    type: string
 *                    description: not found error message
 *                  data:
 *                     type: string
 *                     description: not found error message
 */
router.get(
  '/teachers/:teacherId/schools',
  findTeacher,
  teacherController.getTeacherSchools
);

/**
 * @swagger
 * path:
 *  /teachers/{teacherId}/classes:
 *    get:
 *      summary: Get all classes that this teacher teaches
 *      tags: [Teachers]
 *      parameters:
 *        - name: teacherId
 *          in: path
 *          description: Id of teacher to get their schools
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *      responses:
 *        "200":
 *          description: Successful retrieved teacher classes
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to true
 *                  message:
 *                    type: string
 *                    description: Operation message
 *                  data:
 *                     type: array
 *                     items:
 *                        $ref: '#/components/schemas/Class'
 *        "404":
 *          description: Teacher Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to false
 *                  message:
 *                    type: string
 *                    description: not found error message
 *                  data:
 *                     type: string
 *                     description: not found error message
 */
router.get(
  '/teachers/:teacherId/classes',
  findTeacher,
  teacherController.getTeacherClasses
);

/**
 * @swagger
 * path:
 *  /teachers/{teacherId}/schools/{schoolId}/classes:
 *    get:
 *      summary: Get classes that this teacher teaches in this school
 *      tags: [Teachers]
 *      parameters:
 *        - name: teacherId
 *          in: path
 *          description: Id of teacher to get their classes
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *        - name: schoolId
 *          in: path
 *          description: Id of school to get their classes
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *      responses:
 *        "200":
 *          description: Successful retrieved teacher classes in school
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to true
 *                  message:
 *                    type: string
 *                    description: Operation message
 *                  data:
 *                     type: array
 *                     items:
 *                        $ref: '#/components/schemas/Class'
 *        "404":
 *          description: Teacher or School passed via path parameters Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to false
 *                  message:
 *                    type: string
 *                    description: not found error message
 *                  data:
 *                     type: string
 *                     description: not found error message
 */
router.get(
  '/teachers/:teacherId/schools/:schoolId/classes',
  findTeacher,
  findSchool,
  teacherController.getTeacherClassesInSchool
);

/**
 * @swagger
 * path:
 *  /teachers/{teacherId}/subjects:
 *    get:
 *      summary: Get all subjects that this teacher teaches
 *      tags: [Teachers]
 *      parameters:
 *        - name: teacherId
 *          in: path
 *          description: Id of teacher to get their subjects
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *      responses:
 *        "200":
 *          description: Successful retrieved teacher subjects
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to true
 *                  message:
 *                    type: string
 *                    description: Operation message
 *                  data:
 *                     type: array
 *                     items:
 *                        $ref: '#/components/schemas/Subject'
 *        "404":
 *          description: Teacher Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to false
 *                  message:
 *                    type: string
 *                    description: not found error message
 *                  data:
 *                     type: string
 *                     description: not found error message
 */
router.get(
  '/teachers/:teacherId/subjects',
  findTeacher,
  teacherController.getTeacherSubjects
);

/**
 * @swagger
 * path:
 *  /teachers/{teacherId}/schools/{schoolId}/subjects:
 *    get:
 *      summary: Get subjects that this teacher teaches in this school
 *      tags: [Teachers]
 *      parameters:
 *        - name: teacherId
 *          in: path
 *          description: Id of teacher to get their subjects
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *        - name: schoolId
 *          in: path
 *          description: Id of school to get its subjects
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *      responses:
 *        "200":
 *          description: Successful retrieved teacher subjects in school
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to true
 *                  message:
 *                    type: string
 *                    description: Operation message
 *                  data:
 *                     type: array
 *                     items:
 *                        $ref: '#/components/schemas/Subject'
 *        "404":
 *          description: Teacher or School passed via path parameters Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to false
 *                  message:
 *                    type: string
 *                    description: not found error message
 *                  data:
 *                     type: string
 *                     description: not found error message
 */
router.get(
  '/teachers/:teacherId/schools/:schoolId/subjects',
  findTeacher,
  findSchool,
  teacherController.getTeacherSubjectsInSchool
);

/**
 * @swagger
 * path:
 *  /teachers/{teacherId}/classes/{classId}/subjects:
 *    get:
 *      summary: Get subjects that this teacher teaches in this class
 *      tags: [Teachers]
 *      parameters:
 *        - name: teacherId
 *          in: path
 *          description: Id of teacher to get their subjects
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *        - name: classId
 *          in: path
 *          description: Id of class to get its subjects
 *          required: true
 *          type: string
 *          example: 5f648baac38d3764434b736a
 *      responses:
 *        "200":
 *          description: Successful retrieved teacher subjects in class
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to true
 *                  message:
 *                    type: string
 *                    description: Operation message
 *                  data:
 *                     type: array
 *                     items:
 *                        $ref: '#/components/schemas/Subject'
 *        "404":
 *          description: Teacher or Class passed via path parameters Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: defaults to false
 *                  message:
 *                    type: string
 *                    description: not found error message
 *                  data:
 *                     type: string
 *                     description: not found error message
 */
router.get(
  '/teachers/:teacherId/classes/:classId/subjects',
  findTeacher,
  findClass,
  teacherController.getTeacherSubjectsInClass
);

module.exports = router;
