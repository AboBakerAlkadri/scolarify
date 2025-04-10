const ExamType = require('../models/ExamType');

// ✅ Get all exam types
const testexamType = (req, res) => {
    res.status(200).json({ message: 'Hi, this is exam type' });
  };
  
const getAllExamTypes = async (req, res) => {
  try {
    const examTypes = await ExamType.find();
    res.json(examTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get a single exam type by ID
const getExamTypeById = async (req, res) => {
  try {
    const examType = await ExamType.findById(req.params.id);
    if (!examType) {
      return res.status(404).json({ message: 'Exam type not found' });
    }
    res.json(examType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create a new exam type
const createExamType = async (req, res) => {
  try {
    const newExamType = new ExamType(req.body);
    await newExamType.save();
    res.status(201).json(newExamType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update an exam type by ID
const updateExamTypeById = async (req, res) => {
  try {
    const updatedExamType = await ExamType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedExamType) {
      return res.status(404).json({ message: 'Exam type not found' });
    }
    res.json(updatedExamType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete an exam type by ID
const deleteExamTypeById = async (req, res) => {
  try {
    const deletedExamType = await ExamType.findByIdAndDelete(req.params.id);
    if (!deletedExamType) {
      return res.status(404).json({ message: 'Exam type not found' });
    }
    res.json({ message: 'Exam type deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllExamTypes,
  getExamTypeById,
  createExamType,
  updateExamTypeById,
  deleteExamTypeById,
  testexamType
};
