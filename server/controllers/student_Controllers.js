//controller
//import mongoose from 'mongoose';
const Student = require("../models/student_Model");

// create new student
exports.student_create = function createStudent(req, res) {
    const student = new Student({
        code: req.body.code,
        name: req.body.name,
        birthday: req.body.birthday,
        address: req.body.address,
        grade: req.body.grade,
    });

    return student
        .save()
        .then((newStudent) => {
            return res.status(201).json({
                success: true,
                message: "Tạo thành công một học sinh mới.",
                Student: newStudent,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Server lỗi.Vui lòng thử lại.",
                error: error.message,
            });
        });
};
// get all student
exports.student_getAll = function getAll(req, res) {
    Student.find()
        .select("_id code name birthday address grade")
        .then((allStudent) => {
            return res.status(200).json({
                success: true,
                message: "Danh sách tất cả các học sinh",
                Student: allStudent,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Server lỗi.Vui lòng thử lại.",
                error: err.message,
            });
        });
};
// get single student
exports.student_getSingle = function getSingleStudent(req, res) {
    const id = req.params.studentId;
    Student.findById(id)
        .then((singleStudent) => {
            res
                .status(200)
                .json({
                    success: true,
                    message: `Đã tìm thấy  ${singleStudent.code}`,
                    Student: singleStudent,
                });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Không tìm thấy học sinh này.",
                error: err.message,
            });
        });
};
// update;
exports.student_update = function updateStudent(req, res) {
    const id = req.params.studentId;
    const updateObject = req.body;
    Student.update({ _id: id }, { $set: updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: "Thay đổi đã được lưu.",
                updateStudent: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Lỗi server.Vui lòng thử lại",
            });
        });
};
// delete
exports.student_delete = function deleteStudent(req, res) {
    const id = req.params.studentId;
    Student.findByIdAndRemove(id)
        .exec()
        .then(() =>
            res.status(204).json({
                success: true,
                message: "Xóa thành công.",
            })
        )
        .catch((err) =>
            res.status(500).json({
                success: false,
                message: "Lỗi server.Vui lòng thử lại",
            })
        );
};