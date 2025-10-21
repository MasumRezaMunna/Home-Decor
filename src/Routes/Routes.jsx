
import{ createBrowserRouter} from "react-router-dom";
// import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";


const router = createBrowserRouter([

  {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children:[
      {
        index: true,
        Component: Home,
        loader: () => fetch('./furnitureData.json'),
      },
      {
        path:'/products',
        element: <Products></Products>
      },
      {
        path:'/wishlist',
        element: <Wishlist></Wishlist>
      },
      {
        path:'/products/:id',
        element: <ProductDetails></ProductDetails>
      },
      
    ]
  },
  // {
  //   path: '*',
  //   element: <ErrorPage></ErrorPage>
  // }
])

export default router