import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: null
        },
        {
            path: "auth",
            children: []
        },
        {
            path: "/home",
            element: null
        }
    ]
);

export default AppRouter;