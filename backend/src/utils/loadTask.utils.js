// middlewares/task.middleware.js
import Task from "../models/task.models.js";
import { asyncHandler } from "./asyncHandler.utils.js";

export const loadTask = asyncHandler(async (req, res, next) => {
    const { id } = req.params; // take task id from the route params

    // find task
    const task = await Task.findById(id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    // attach task to request
    req.task = task;

    next();
});
