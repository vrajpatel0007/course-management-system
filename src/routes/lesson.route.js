const express = require('express');
const lesson_controller = require('../controllers/lesson.controller');
const { authUser,authorizeAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/createlesson/:courseId', authUser,authorizeAdmin, lesson_controller.createLesson);
router.put('/updatelesson/:id', authUser,authorizeAdmin, lesson_controller.updateLesson);
router.delete('/deletelesson/:id', authUser,authorizeAdmin, lesson_controller.deleteLesson);

router.get('/getlessonbyid/:id', authUser, lesson_controller.getLessonById);
router.get('/course/:courseId', authUser, lesson_controller.getLessonsByCourse);

module.exports = router;
