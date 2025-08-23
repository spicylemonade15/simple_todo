import Task from "../models/task.models.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

// create a task
const createTask = asyncHandler(async (req, res) => {
    const { title } = req.body;

    const newTask = await Task.create({ title });

    return res.status(201).json({
        success: true,
        data: newTask
    });
});

// get all tasks
const getTasks = asyncHandler(async (_, res) => {
    const tasks = await Task.find();

    return res.status(200).json({
        success: true,
        data: tasks
    });
});

// get a single task
const getTask = asyncHandler(async (req, res) => {
    return res.status(200).json({
        success: true,
        data: req.task
    });
});

// update a task
const updateTask = asyncHandler(async (req, res) => {
    const { title } = req.body;

    if (title) {
        req.task.title = title;
    }

    await req.task.save();

    return res.status(200).json({
        success: true,
        data: req.task
    });
});

// delete a task
const deleteTask = asyncHandler(async (req, res) => {
    await req.task.deleteOne();

    return res.status(200).json({
        success: true,
        message: "Task deleted successfully"
    });
});

export { loadTask, createTask, getTasks, getTask, updateTask, deleteTask };