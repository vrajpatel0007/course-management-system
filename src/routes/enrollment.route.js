const express = require('express');
const  enrollment_controller= require('../controllers/enrollment.controller');
const { authUser } = require('../middleware/auth');

const router = express.Router();

// Routes for users to enroll and track progress
router.post('/enroll', authUser, enrollment_controller.enrollInCourse);
router.post('/complete', authUser, enrollment_controller.completeLesson);
router.get('/userenrollments', authUser, enrollment_controller.getUserEnrollments);

module.exports = router;
