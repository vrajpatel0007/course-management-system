const lesson_service = require('../services/lesson.service');

const createLesson = async (req, res) => {
  const { courseId } = req.params;
  const lessonData = req.body;
  const lessonDetails = { courseId, ...lessonData };

  try {
    const lesson = await lesson_service.create(lessonDetails);
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLesson = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const lesson = await lesson_service.update(id, updates);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLesson = async (req, res) => {
  const { id } = req.params;

  try {
    const lesson = await lesson_service.delete(id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.status(200).json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLessonById = async (req, res) => {
  const { id } = req.params;

  try {
    const lesson = await lesson_service.getById(id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLessonsByCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const lessons = await lesson_service.getByCourse(courseId);
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLesson,
  updateLesson,
  deleteLesson,
  getLessonById,
  getLessonsByCourse,
};
