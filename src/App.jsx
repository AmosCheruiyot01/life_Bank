import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";

import AppLayout from "./ui/Applayout";
import Dashboard from "./Dashboard/Dashboard";
import DonateBlood from "./Dashboard/DonateBlood";
import RequestBlood from "./Dashboard/RequestBlood";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard />, errorElement: <Error /> },
      { path: "/donate", element: <DonateBlood />, errorElement: <Error /> },
      { path: "/request", element: <RequestBlood />, errorElement: <Error /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;