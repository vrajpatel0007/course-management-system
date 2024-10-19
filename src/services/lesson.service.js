const Lesson = require('../models/lesson.modal');

const create = async (lessonData) => {
  const lesson = new Lesson(lessonData);
  return await lesson.save();
};

const update = async (id, updates) => {
  return await Lesson.findByIdAndUpdate(id, updates, { new: true });
};

const deleteLesson = async (id) => {
  return await Lesson.findByIdAndDelete(id);
};

const getById = async (id) => {
  return await Lesson.findById(id);
};

const getByCourse = async (courseId) => {
  return await Lesson.find({ courseId });
};

module.exports = {
  create,
  update,
  deleteLesson,
  getById,
  getByCourse
};
