import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Screens/Home/Home";
import ProductDetails from "./Screens/ProductDetails/ProductDetails";

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
