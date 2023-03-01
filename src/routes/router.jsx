import { createBrowserRouter } from "react-router-dom";

import { Layout, Home, Clients } from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
    ],
  },
]);

export default router;
