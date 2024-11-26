import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginForm />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>,
    }
]);

export default router;