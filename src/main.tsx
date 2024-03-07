import ReactDOM from "react-dom/client";
import { Providers } from "./contexts/Providers";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers />
);
