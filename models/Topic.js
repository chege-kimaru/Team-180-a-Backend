const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    // path here is a link to where the notes/video is stored e.g a cloudinary link
    notes: [
      {
        file: {
          path: { type: String, required: true },
          name: { type: String, required: true },
        },
      },
    ],
    videoLessons: [
      {
        file: {
          path: { type: String, required: true },
          name: { type: String, required: true },
        },
      },
    ],

    conferenceLink: String,
    subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
  },
  { timestamps: true }
);

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;
