import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SinglePage from "../Pages/SinglePage/SinglePage";
import Write from "../Pages/Write/Write";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "write", element: <Write /> },
            {
                path: "blog/:id",
                element: <SinglePage />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/blog/${params.id}`),
            },
        ],
    },
]);

export default router;
