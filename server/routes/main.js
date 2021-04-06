//router
const express = require("express");
const Student = require("../controllers/student_Controllers");

const router = express.Router();
//create a new student
router.post("/students", Student.student_create);

// get all student
router.get("/students", Student.student_getAll);

// get single student
router.get("/students/:studentId", Student.student_getSingle);

// delete student dung put
router.put("/students/:studentId", Student.student_delete);

module.exports = router;