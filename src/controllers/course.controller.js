const course_service = require('../services/course.service');

const createCourse = async (req, res) => {
  const courseData = req.body;
  try {
    const course = await course_service.create(courseData);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const course = await course_service.update(id, updates);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await course_service.delete(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await course_service.getAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
  updateCourse,
  deleteCourse,
  getAllCourses
};
