import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MyScripts } from "./components/MyScripts/MyScripts";
import { Itinerary } from "./components/Itinerary/Itinerary";
import { ItineraryV2 } from "./components/ItineraryV2/ItineraryV2";
import { Step1 } from "./components/ItineraryV2/Step1/Step1";
import { Step2 } from "./components/ItineraryV2/Step2/Step2";
import { Step3 } from "./components/ItineraryV2/Step3/Step3";
import { Step4 } from "./components/ItineraryV2/Step4/Step4";
import { Loading } from "./components/ItineraryV2/Loading/Loading";
import { ItineraryResume } from "./components/ItineraryV2/ItineraryResume/ItineraryResume";
import { ItineraryAdjust } from "./components/ItineraryV2/ItineraryAdjust/ItineraryAdjust";
import { ItineraryDownload } from "./components/ItineraryV2/ItineraryDownload/ItineraryDownload";
import { PlaceToTravel } from "./components/ItineraryV2/PlaceToTravel/PlaceToTravel";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItineraryV2 />} />
        <Route path="/roteiro/passo-1" element={<Step1 />} />
        <Route path="/roteiro/passo-2" element={<Step2 />} />
        <Route path="/roteiro/local" element={<PlaceToTravel />} />
        <Route path="/roteiro/passo-3" element={<Step3 />} />
        <Route path="/roteiro/passo-4" element={<Step4 />} />
        <Route path="/roteiro/loading" element={<Loading />} />
        <Route path="/roteiro/resume" element={<ItineraryResume />} />
        <Route path="/roteiro/download" element={<ItineraryDownload />} />
        <Route path="/roteiro/adjust" element={<ItineraryAdjust />} />
        <Route path="/meusroteiros" element={<MyScripts />} />
        <Route path="/roteiro/:itinerary_id" element={<Itinerary />} />
      </Routes>
    </Router>
  );
}
