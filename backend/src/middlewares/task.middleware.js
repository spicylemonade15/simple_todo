import Task from "../models/task.models.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

export const loadTask = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    req.task = task; // attach to request
    next();
});
