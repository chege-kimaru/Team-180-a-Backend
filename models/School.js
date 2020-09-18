const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * @swagger
 *  components:
 *    schemas:
 *      School:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: Name of school
 *          adminId:
 *            type: string
 *            description: Id of The one in charge of managing the school
 *          level:
 *            type: string
 *            description: The school level that the teacher teaches
 *          location:
 *            type: string
 *            description: School Location
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the teacher, needs to be unique.
 *          postalAddress:
 *            type: string
 *            description: Postal Address of the school
 *          phoneNumber:
 *            type: string
 *            description: Phone number of the school
 *          students:
 *            type: array
 *            description: The students in this school
 *          teachers:
 *            type: array
 *            description: The teachers in this school
 *          classes:
 *            type: array
 *            description: The classes in this school
 *        example:
 *           name: Kenyatta University
 *           adminId: 5f648baac38d3764434b736a
 *           level: University
 *           email: ku@ku.ac.ke
 *           postalAddress: 345,Nairobi
 *           phoneNumber: +2547890897
 *           students: []
 *           classes: []
 *           teachers: []
 *
 */

const schoolSchema = new Schema(
  {
    name: { type: String, required: true },
    adminId: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
    level: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    postalAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
    classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
  },
  { timestamps: true }
);

const School = mongoose.model('School', schoolSchema);
module.exports = School;
