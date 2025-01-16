const express = require('express');
const userRoutes = require('./userRoutes');
const schoolRoutes = require('./schoolRoutes');
const classRoutes = require('./classRoutes');
const subjectRoutes = require('./subjectRoutes');
const attendanceRoutes = require('./attendanceRoutes');
const gradeRoutes = require('./gradeRoutes');
const studentRoutes = require('./studentRoutes');
const resourcesRoutes = require('./resourcesRoutes');
const disciplineRoutes = require('./disciplineRoutes');
const announcementRoutes = require('./announcementRoutes');

const router = express.Router();
router.use('/user', userRoutes);
router.use('/school', schoolRoutes);
router.use('/class', classRoutes);
router.use('/subject', subjectRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/grade', gradeRoutes);
router.use('/student', studentRoutes);
router.use('/resources', resourcesRoutes);
router.use('/discipline', disciplineRoutes);
router.use('/announcement', announcementRoutes);

module.exports = router;
