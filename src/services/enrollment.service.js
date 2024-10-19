const Enrollment = require('../models/enrollment.modal');
const Lesson = require('../models/lesson.modal');

const enroll = async (enrollmentData) => {
    const enrollment = new Enrollment(enrollmentData);
    return await enrollment.save();
};

const completeLesson = async ({ userId, courseId, lessonId }) => {
    const enrollment = await Enrollment.findOne({ userId, courseId });
    if (!enrollment) throw new Error('Enrollment not found');

    enrollment.completedLessons.push(lessonId);
    await enrollment.save();
    return enrollment;
};

const getByUser = async (userId) => {
    return await Enrollment.find({ userId });
};

module.exports = {
    enroll,
    completeLesson,
    getByUser
};
