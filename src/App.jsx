import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";

import AppLayout from "./ui/Applayout";
import Dashboard from "./Dashboard/Dashboard";
import DonateBlood from "./Dashboard/DonateBlood";
import RequestBlood from "./Dashboard/RequestBlood";
import Appointments from "./Dashboard/Appointments";
import CreateUser from "./features/users/CreateUser";
import Error from "./ui/Error";
import Search from "./Dashboard/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard />, errorElement: <Error /> },
      { path: "/donate", element: <DonateBlood />, errorElement: <Error /> },
      { path: "/request", element: <RequestBlood />, errorElement: <Error /> },
      { path: "/appointments", element: <Appointments />, errorElement: <Error />},
      { path: "/createuser", element: <CreateUser/>, errorElement: <Error />},
      { path: "/search", element: <Search/>, errorElement: <Error />}
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
