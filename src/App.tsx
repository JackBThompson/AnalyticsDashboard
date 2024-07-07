import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Users from "./pages/Users";
import Products from "./pages/Products";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Login from "./pages/Login";
import "./styles/global.scss";
import SingleUser from "./components/SingleUser";
import SingleProduct from "./components/SingleProduct";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
              <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

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
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <SingleUser />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App