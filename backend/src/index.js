import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js';
import app from './app.js';

// load dotenv files
dotenv.config({
    path: './.env'
});

// make connection to the database
connectDB()
    .then(() => {
        // start the server 
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// start the server 