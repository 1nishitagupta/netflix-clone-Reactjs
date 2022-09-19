// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Netflix from "./Netflix/Netflix";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Netflix />);
