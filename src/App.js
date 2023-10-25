import "./App.css";
import { Container } from "react-bootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

let routers = createBrowserRouter([
  {path:"/", element: <Layout/> , children: [
    {index: true , element: <Home/>} ,
    {path: "/productDetails/:id" , element: <ProductDetails/>} ,
  ]}
])

function App() {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;
