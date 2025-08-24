// appRouter.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomePage from "../pages/HomePage.jsx";
import TaskPage from "../pages/TaskPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "task/:id",
                element: <TaskPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
        ],
    },
]);

export default appRouter;
