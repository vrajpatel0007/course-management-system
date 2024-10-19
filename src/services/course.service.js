const Course = require('../models/course.modal');

const create = async (courseData) => {
    const course = new Course(courseData);
    return await course.save();
};

const update = async (id, updates) => {
    return await Course.findByIdAndUpdate(id, updates, { new: true });
};

const deleteCourse = async (id) => {
    return await Course.findByIdAndDelete(id);
};

const getAll = async () => {
    return await Course.find();
};

module.exports = {
    create,
    update,
    deleteCourse,
    getAll
};
