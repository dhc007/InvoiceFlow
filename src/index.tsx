import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InvoiceflowLanding } from "./screens/InvoiceflowLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <InvoiceflowLanding />
  </StrictMode>,
);
