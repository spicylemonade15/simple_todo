// create the server from express
import express from 'express';
import appRouter from './routes/appRouter.js';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use("/api/v1", appRouter)

export default app;