import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as React from "react";
import Routes from "./routes";
import "./App.css";
import routesObject from "./routes/routes";
import ViewportProvider from "./context/viewportContext";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
function App() {
  const router = createBrowserRouter(routesObject);
  return (
    <>
      <ViewportProvider>
        <React.Suspense fallback={<LoadingScreen />}>
          <RouterProvider router={router} />
        </React.Suspense>
      </ViewportProvider>
    </>
  );
}

export default App;
