const express = require('express');
const course_controller = require('../controllers/course.controller');
const { authUser, authorizeAdmin } = require('../middleware/auth');

const router = express.Router();

// Admin-only routes
router.post('/createcourse', authUser, authorizeAdmin, course_controller.createCourse);
router.put('/updatecourse/:id', authUser, authorizeAdmin, course_controller.updateCourse);
router.delete('/deletecourse/:id', authUser, authorizeAdmin, course_controller.deleteCourse);

// Public route to get all courses
router.get('/courses', authUser, course_controller.getAllCourses);

module.exports = router;
