import express from 'express';
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/task.controllers.js';
import { loadTask } from '../middlewares/task.middleware.js';

// create routing 
const appRouter = express.Router();

// define CRUD routes
router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.get("/tasks/:id", loadTask, getTask);
router.patch("/tasks/:id", loadTask, updateTask);
router.delete("/tasks/:id", loadTask, deleteTask);

export default appRouter;
