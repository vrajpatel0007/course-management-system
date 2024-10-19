const enrollment_service = require('../services/enrollment.service');

const enrollInCourse = async (req, res) => {
  const userId = req.user._id;
  const { courseId } = req.body;
  const enrollmentData = { userId, courseId };
  try {
    const enrollment = await enrollment_service.enroll(enrollmentData);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const completeLesson = async (req, res) => {
  const userId = req.user._id;
  const { courseId, lessonId } = req.body;
  const completionData = { userId, courseId, lessonId };
  try {
    const enrollment = await enrollment_service.completeLesson(completionData);
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserEnrollments = async (req, res) => {
  const userId = req.user._id;
  try {
    const enrollments = await enrollment_service.getByUser(userId);
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  enrollInCourse,
  completeLesson,
  getUserEnrollments
};
