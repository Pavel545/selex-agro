import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import LoadingSpinner from "../module/loadingSpinner";
import AppLayout from "../module/layouts";
import OurProducts from "../pages/ourProducts/ourProducts";
import Company from "../pages/company";
import Services from "../pages/services";
import Contacts from "../pages/contacts";
import ProductsIts from "../pages/products";
import Politic from "../pages/politic";
// Ленивые импорты с корректными путями
const Main = lazy(() => import("../pages/main"));
const NotFound = lazy(() => import("../pages/notFound"));
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <Suspense >
              <Main />
            </Suspense>
          ),
        },

        {
          path: "our_products",
          children: [
            {
              index: true,
              element: (
                <Suspense >
                  <OurProducts />
                </Suspense>
              ),
            },
            {
              path: ":url",
              element:
                <Suspense>
                  <ProductsIts/>
                </Suspense>
            }
          ]
        },
        {
          path: "company",
          element: (
            <Suspense>
              <Company />
            </Suspense>
          )
        },
        {
          path: "services",
          element: (
            <Suspense>
              <Services />
            </Suspense>
          )
        },
       
        //  {
        //   path: "stati",
        //   children: [
        //     {
        //       index: true,
        //       element: (
        //         <Suspense >
        //           <Stati/>
        //         </Suspense>
        //       ),
        //     },
        //     {
        //       path: ":url",
        //       element:
        //         <Suspense>
        //           <StatiIts/>
        //         </Suspense>
        //     }
        //   ]
        // },
        {
          path: "contacts",
          element: (
            <Suspense>
              <Contacts />
            </Suspense>
          )
        },
        {
          path: "politic",
          element: (
            <Suspense>
              <Politic />
            </Suspense>
          )
        },
        // {
        //   path: "shops",
        //   element: (
        //     <Suspense fallback={<LoadingSpinner fullScreen />}>
        //       {/* <Shops themeName={"shops"} /> */}
        //     </Suspense>
        //   ),
        // },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
