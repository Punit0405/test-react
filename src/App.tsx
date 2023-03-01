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
import DragMedia from "./components/Gallery/DragMedia";
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


function App() {
  return (
    <>
    <TopBarComponent/>
    <NavBarComponent/>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/studiomanagement" element={<Gallery />} />
      <Route path="/gallery/newcollection" element={<AddCollection />} />
      <Route path="/gallery/addcollection" element={<DragMedia />} />
      <Route path="/setting/collection-setting" element={<CollectionSetting />} />
      <Route path="/setting/privacy" element={<PrivacySetting />} />
      <Route path="/setting/download" element={<DownloadStatus />} />
      <Route path="/asset-registry" element={<AssetRegistry/>}>
        <Route path="" element= {<AssetDashboardMain/>}></Route>
        <Route path="device-list" element={<AssetDeviceList/>}></Route>
      </Route>
      <Route path="/music" element={<Music />} />
    </Routes>
    </>
  );
}
export default App;
