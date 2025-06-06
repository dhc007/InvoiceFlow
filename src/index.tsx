import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InvoiceflowLanding } from "./screens/InvoiceflowLanding";
import { PricingPage } from "./screens/PricingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InvoiceflowLanding />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);