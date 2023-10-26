import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./contexts/Providers";
import { createStandaloneToast } from "@chakra-ui/react";

import "./styles/global.css";

const { ToastContainer, toast } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Providers />
    <ToastContainer />
  </>
);
