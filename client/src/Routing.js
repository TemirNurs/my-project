import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routing = () => {
    let PUBLIC_ROUTES = [
      {
        link: "/",
        element: <HomePage />,
        id: 1,
      },
      {
        link: "/products/:category",
        element: <ProductList />,
        id: 7,
      },
      {
        link: "/products/:id",
        element: <Product />,
        id: 3,
      },
      {
        link: "/products",
        element: <ProductList />,
        id: 2,
      },
      {
        link: "/cart",
        element: <Cart />,
        id: 4
      },
      {
        link: "/login",
        element: <Login />,
        id: 5
      },
      {
        link: "/auth",
        element: <Register />,
        id: 6
      },
    ];
    // const ADMIN_ROUTES = [
    //   {
    //     link: "/admin",
    //     element: <AdminPage />,
    //     id: 1,
    //   },
    // ];
    // const { user } = useAuth();
    return (
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
        {/* { user ? ADMIN_ROUTES.map((item) => (
          <Route
            path={item.link}
            element={
              user.email === "sputnik@gmail.com" ? (
                item.element
              ) : (
                <Navigate replace to="*" />
              )
            }
          />
        )): null} */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    );
  };
  
  export default Routing;;