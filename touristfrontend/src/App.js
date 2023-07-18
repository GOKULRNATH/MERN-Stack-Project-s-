import "./Asset/Style/Nav.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Footer from "./Components/Footer";
import About from "./Components/About";
import RestReg from "./Components/RestReg";
import RestLogin from "./Components/RestLogin";
import CustHome from "./CustProf/CustHome";
import CustViewProf from "./CustProf/CustViewProf";
import CustEditProf from "./CustProf/CustEditProf";
import RestHome from "./Components/RestProf/RestHome";
import RestViewProf from "./Components/RestProf/RestViewProf";
import RestEditProf from "./Components/RestProf/RestEditProf";
import HotelLogin from "./Components/HotelLogin";
import HotelReg from "./Components/HotelReg";
import HotelHome from "./Components/HotelProf/HotelHome";
import HotelViewProf from "./Components/HotelProf/HotelViewProf";
import HotelEditProf from "./Components/HotelProf/HotelEditProf";
import AdminNav from "./Components/AdminNav";
import AdminHome from "./Components/AdminHome";
import AdminAbout from "./Components/AdminAbout";
import Adminpage from "./Components/AdminPage";
import AddRoom from "./Components/AddRoom";
import AddFood from "./Components/AddFood";
import ViewRoom from "./Components/ViewRoom";
import ViewFood from "./Components/ViewFood";
import EditFood from "./Components/EditFood";
import EditRoom from "./Components/EditRoom";
import ViewRest from "./Components/ViewRest";
import ViewHotel from "./Components/ViewHotel";
import ViewSinglerest from "./Components/ViewSingleres";
import ViewSingleHot from "./Components/ViewSingleHot";
import GuideNav from "./Components/Guide/GuideNav";
import GuideLogin from "./Components/Guide/GuideLogin";
import AddPackage from "./Components/Guide/AddPackage";
import GuideHome from "./Components/Guide/GuideHome";
import ViewPackage from "./Components/ViewPackage";
import ViewSinglePack from "./Components/ViewSinglePack";
import AdminPack from "./Components/AdminPack";
import EditPackage from "./Components/Guide/EditPackage";
import ViewGuidePack from "./Components/Guide/ViewGuidePack";
import GuideRegister from "./Components/Guide/GuideRegister"
import GuideProfHome from "./Components/GuideProf/GuideProfHome";
import GuideProfNav from "./Components/GuideProf/GuideProfNav";
import GuideProfView from "./Components/GuideProf/GuideProfView";
import GuideProfEdit from "./Components/GuideProf/GuideProfEdit";
import AddBooking from "./Components/AddBooking";
import Payment from "./Components/Payment";

function App() {
  return (
    <BrowserRouter basename="/projects/tourist_guide">
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar /> <Home />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <Navbar /> <Home />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <Navbar /> <About />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Navbar /> <Login />
              </>
            }
          />
          <Route
            path="/RestLogin"
            element={
              <>
                <Navbar />
                <RestLogin />
              </>
            }
          />
          <Route
            path="/RestReg"
            element={
              <>
                <Navbar /> <RestReg />
              </>
            }
          />
          <Route
            path="/Register"
            element={
              <>
                <Navbar /> <Register />
              </>
            }
          />
          <Route
            path="/HotelLogin"
            element={
              <>
                <Navbar />
                <HotelLogin />
              </>
            }
          />
          <Route
            path="/HotelReg"
            element={
              <>
                <Navbar />
                <HotelReg />
              </>
            }
          />
          <Route path="/CustHome" element={<CustHome />} />
          <Route path="/CustViewProf" element={<CustViewProf />} />
          <Route path="/CustEditProf" element={<CustEditProf />} />
          <Route path="/RestHome" element={<RestHome />} />
          <Route path="/RestViewProf" element={<RestViewProf />} />
          <Route path="/RestEditProf" element={<RestEditProf />} />
          <Route path="/HotelHome" element={<HotelHome />} />
          <Route path="/HotelViewProf" element={<HotelViewProf />} />
          <Route path="/HotelEditProf" element={<HotelEditProf />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminnav" element={<AdminNav />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/AdminAbout" element={<AdminAbout />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/admin/adminpage" element={<Adminpage />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/AddFood" element={<AddFood />} />
          <Route path="/ViewRoom" element={<ViewRoom />} />
          <Route path="/ViewFood" element={<ViewFood />} />
          <Route path="/EditFood/:id" element={<EditFood />} />
          <Route path="/EditRoom/:id" element={<EditRoom />} />
          <Route path="/ViewRest" element={<ViewRest />} />
          <Route path="/ViewHotel" element={<ViewHotel />} />
          <Route path="/ViewSingleres/:id" element={<ViewSinglerest />} />
          <Route path="/ViewSingleHot/:id" element={<ViewSingleHot />} />
          <Route path="/GuideNav" element={<GuideNav />} />
          <Route path="/GuideLogin" element={<GuideLogin />} />
          <Route path="/AddPackage" element={<AddPackage />} />
          <Route path="/EditPackage/:id" element={<EditPackage />} />
          <Route path="/GuideHome" element={<GuideHome />} />
          <Route path="/ViewPackage" element={<ViewPackage />} />
          <Route path="/ViewSinglePack/:id" element={<ViewSinglePack />} />
          <Route path="/admin/AdminPack" element={<AdminPack />} />
          <Route path="/ViewGuidePack" element={<ViewGuidePack />} />
          <Route path="/GuideRegister" element={<GuideRegister />} />
          <Route path="/GuideProfHome" element={<GuideProfHome />} />
          <Route path="/GuideProfNav" element={<GuideProfNav />} />
          <Route path="/GuideProfView" element={<GuideProfView />} />
          <Route path="/GuideProfEdit" element={<GuideProfEdit />} />
          <Route path="/AddBooking/:id" element={<AddBooking />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
