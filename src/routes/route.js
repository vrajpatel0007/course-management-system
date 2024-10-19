const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const courseRoute = require("./course.route");
const enrollmentRoute = require("./enrollment.route");
const lessonRoute = require("./lesson.route");

routes.use("/user", userRoute);
routes.use("/course", courseRoute);
routes.use("/enrollment", enrollmentRoute);
routes.use("/lesson", lessonRoute);

module.exports = routes;
