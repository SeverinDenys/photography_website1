import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./ErrorPage";
import PhotoSessions from "./components/photoSessions/PhotoSessions";
import PhotoSessionFolderPage from "./components/photoSessionFolder/PhotoSessionFolderPage"; // Import your PhotoSessionFolderPage component
import PageWithoutUserId from "./components/pageWithoutUserId/PageWithoutUserId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "PhotoSessions",
    element: <PhotoSessions />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/PhotoSessionFolderPage/:photoSessionId",
    element: <PhotoSessionFolderPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/PageWithoutUserId",
    element: <PageWithoutUserId />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
