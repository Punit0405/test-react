import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import "./fontawesome/css/all.css";
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
import "react-h5-audio-player/lib/styles.css";
import AssetDeviceList from "./components/AssetRegistry/DeviceList";
import AssetDashboardMain from "./components/AssetRegistry/AssetDashboardMain";
import ForSaleList from "./components/AssetRegistry/ForSaleList";
import MusicDownloads from "./pages/MusicDownloads";
import MusicDownloadList from "./pages/MusicDownloadList";
import DragMedia from "./components/Gallery/DragMedia";
import MusicCollectionList from "./pages/MusicCollectionList";
import MusicCollections from "./pages/MusicCollections";
import Grid from "./components/Grid";
import Collection from "./components/Gallery/Collection";
import LayoutWithSideBar from "./components/LayoutWithSideBar";
import Design from "./components/StudioManagement/Design";
import GetCover from "./components/AssetRegistry/GetCover";
import StudioLayout from "./pages/StudioLayout";
import Setting from "./pages/Setting";
import BillingComponent from "./components/StudioManagement/BillingComponent";
import ForRentList from "./components/AssetRegistry/ForRentList";
import InsuranceQuoteComponent from "./components/AssetRegistry/InsuranceQuote";
import StudioDashBoard from "./components/StudioSettings/StudioDashBoard";
import ClientDashboard from "./components/StudioSettings/ClientDashboard";
import Client from "./components/StudioSettings/Client";
import Questionnaires from "./components/StudioSettings/Questionnaires";
import Templates from "./components/StudioSettings/Templates";
import Speciality from "./components/StudioSettings/Speciality";
import DynamicForm from "./components/StudioSettings/DynamicForm";
import Portfolio from "./pages/Portfolio";
import PortfolioComponent from "./components/Gallery/Portfolio";
import PortfolioDragMedia from "./components/Gallery/PortfolioDragMedia";
import ClientQuestionnaries from "./components/StudioSettings/ClientQuestionnaries";
import { InvoiceInfo } from "./components/StudioSettings/invoice/invoiceInfo";
import InvoiceDashboard from "./components/StudioSettings/InvoiceDashboard";
import { Invoice } from "./components/StudioSettings/invoice/invoice";
import SuccessComponent from "./components/StudioManagement/SuccessComponent";

function RoutesAll() {
    return (
        <>
            <TopBarComponent />
            <NavBarComponent />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Setting />}>
                    <Route path="billing" element={<BillingComponent />} />
                    <Route path="success" element={<SuccessComponent />} />
                </Route>
                <Route path="/studiomanagement" element={<StudioLayout />}>
                    <Route path="clients" element={<ClientDashboard />} />
                    <Route path="clients/:clientId" element={<Client />} />
                    <Route path="questionnaires" element={<Questionnaires />} />
                    <Route
                        path="questionnaires/:questionnariesId"
                        element={<ClientQuestionnaries />}
                    />
                    <Route path="templates" element={<Templates />} />
                    <Route
                        path="templates/edit-template"
                        element={<DynamicForm />}
                    />
                    <Route path="speciality" element={<Speciality />} />
                    <Route path="invoices" element={<InvoiceDashboard />} />
                    <Route path="invoices/:invoiceId" element={<Invoice />} />
                    <Route path="quotations" element={<InvoiceDashboard />} />
                    <Route
                        path="quotations/:quotationId"
                        element={<Invoice />}
                    />
                    <Route path="invoice-info" element={<InvoiceInfo />} />
                    <Route path="*" element={<StudioDashBoard />} />
                    <Route path="for-sale" element={<StudioDashBoard />} />
                </Route>
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route
                    path="/portfolio/:portfolioId"
                    element={<PortfolioComponent />}
                />
                <Route
                    path="/portfolio/addportfolio/:portfolioId"
                    element={<PortfolioDragMedia />}
                />
                <Route path="/gallery" element={<LayoutWithSideBar />}>
                    <Route
                        path="/gallery/newcollection"
                        element={<AddCollection />}
                    />
                    <Route
                        path="/gallery/collection/:collectionId"
                        element={<Collection />}
                    />
                    <Route
                        path="/gallery/addcollection/:collectionId"
                        element={<DragMedia />}
                    />
                    <Route
                        path="/gallery/grid/:collectionId"
                        element={<Grid />}
                    />
                    <Route
                        path="/gallery/collection-setting/:collectionId"
                        element={<CollectionSetting />}
                    />
                    <Route
                        path="/gallery/privacy/:collectionId"
                        element={<PrivacySetting />}
                    />
                    <Route
                        path="/gallery/download/:collectionId"
                        element={<DownloadStatus />}
                    />
                    <Route
                        path="/gallery/design/:collectionId"
                        element={<Design />}
                    />
                </Route>
                <Route path="/asset-registry" element={<AssetRegistry />}>
                    <Route path="" element={<AssetDashboardMain />}></Route>
                    <Route
                        path="device-list"
                        element={<AssetDeviceList />}
                    ></Route>
                    <Route path="for-sale" element={<ForSaleList />}></Route>
                    <Route path="get-cover" element={<GetCover />}></Route>
                    <Route
                        path="get-cover/:id"
                        element={<InsuranceQuoteComponent />}
                    ></Route>
                    <Route path="for-rent" element={<ForRentList />}></Route>
                </Route>
                <Route path="/music" element={<Music />} />
                <Route
                    path="/music/downloads"
                    element={<MusicDownloadList />}
                />
                <Route
                    path="/music/collections"
                    element={<MusicCollectionList />}
                />
                <Route
                    path="/music/downloads/:id"
                    element={<MusicDownloads />}
                />
                <Route
                    path="/music/collections/:id"
                    element={<MusicCollections />}
                />
            </Routes>
        </>
    );
}
export default RoutesAll;
