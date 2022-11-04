import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Recent from "./pages/Recent";
import Root from "./pages/Root";
import Search from "./pages/Search";
import Write from "./pages/Write";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/recent",
          element: <Recent />,
        },
        {
          path: "/write",
          element: <Write />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
