import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Headlines from "./pages/Headlines/Headlines";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'news', element: <Headlines /> },
      ]
    },
  ]);
  
  return <RouterProvider router={router}></RouterProvider>;
}
