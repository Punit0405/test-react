import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";
import "./fontawesome/css/all.css"
import Gallery from "./pages/Gallery";
import AddCollection from "./components/Gallery/AddCollection";
import CollectionSetting from "./components/StudioManagement/CollectionSetting";
import PrivacySetting from "./components/StudioManagement/PrivacySetting";
import DownloadStatus from "./components/StudioManagement/DownloadStatus";
import Login from "./pages/Login";
import AssetRegistry from "./pages/AssetRegistry";
import TopBarComponent from "./components/TopBarComponent";
import NavBarComponent from "./components/NavbarComponent";
import Constants from "./Config/Constants";
import Music from "./pages/Music";
import 'react-h5-audio-player/lib/styles.css';
import AssetDeviceList from "./components/AssetRegistry/DeviceList";
import AssetDashboardMain from "./components/AssetRegistry/AssetDashboardMain";
import ForSaleList from "./components/AssetRegistry/ForSaleList";
import MusicDownloads from "./pages/MusicDownloads";
import MusicDownloadList from "./pages/MusicDownloadList";
import DragMedia from "./components/Gallery/DragMedia";
import MusicCollectionList from "./pages/MusicCollectionList";
import MusicCollections from "./pages/MusicCollections";
import Grid from "./components/Grid";
import Grid1 from "./components/Grid1";
import Collection from "./components/Gallery/Collection";
import RoutesAll from "./RoutesAll";


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<RoutesAll />} />
      </Routes>
    </>
  );
}
export default App;
