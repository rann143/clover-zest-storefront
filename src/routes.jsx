import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/:name?",
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
