import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import * as React from "react";

// Components
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Achievments from "./components/Achievments/Achievment";
import Hamburger from "./components/Hamburger/Hamburger";

// Pages
import NotFound from "./pages/Not_found/NotFound";

// 👇 New: GalleryPage route for /gallery/:id
const GalleryPage = React.lazy(() => import("./pages/GalleryPage"));

// Lazy-loaded pages
const Home = React.lazy(() => import("./pages/Home/home"));
const Notification = React.lazy(() =>
  import("./pages/Notification/Notification")
);
const Gallery = React.lazy(() => import("./pages/Gallery/Gallery"));

// About section
const About2 = React.lazy(() => import("./pages/About/About"));
const Management = React.lazy(() => import("./pages/About/Management"));
const Bank = React.lazy(() => import("./pages/About/Bankdetail"));
const Membership = React.lazy(() => import("./pages/About/Membership"));

// Coop
const CoopPrinciple = React.lazy(() => import("./pages/Coop/About_coop"));
const History = React.lazy(() => import("./pages/Coop/History"));
const AboutCoop = React.lazy(() => import("./pages/Coop/Coop_principle"));

// Other
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Admin = React.lazy(() => import("./pages/Administrator/Admin"));
const Program = React.lazy(() => import("./pages/Program/Program"));
const AnnualReport = React.lazy(() =>
  import("./pages/Annual_report/Annual_report")
);
const Downloads = React.lazy(() => import("./pages/Download/Download"));
const Schemes = React.lazy(() => import("./pages/Schemes/Schemes"));

// 👇 Lazy load Cards (used in Home route only)
const Cards = React.lazy(() => import("./components/Cards/Cards"));

//Suggestion Box
const SuggestionBox = React.lazy(() =>
  import("./pages/SuggestionBox/SuggestionBox")
);

function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(
        `${process.env.REACT_APP_SERVERNAME}/api/notifications?populate=*`
      );
      let response = await data.json();
      let notification = await response.data;
      setArr([...notification]);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Nav />
      <Hamburger />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <>
                <Home arr={arr} />
                <Achievments />
                <Cards />
                <About />
              </>
            </React.Suspense>
          }
        />

        <Route
          exact
          path="/home"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home arr={arr} />
            </React.Suspense>
          }
        />

        <Route
          exact
          path="/gallery"
          element={
            <React.Suspense fallback={<>...</>}>
              <Gallery />
            </React.Suspense>
          }
        />

        {/* ✅ New: Gallery detail route */}
        <Route
          exact
          path="/gallery/:id"
          element={
            <React.Suspense fallback={<>...</>}>
              <GalleryPage />
            </React.Suspense>
          }
        />

        <Route
          exact
          path="/notification"
          element={
            <React.Suspense fallback={<>...</>}>
              <Notification arr={arr} />
            </React.Suspense>
          }
        />

        <Route
          exact
          path="/about/about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About2 />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/about/management"
          element={
            <React.Suspense fallback={<>...</>}>
              <Management />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/about/bankdetails"
          element={
            <React.Suspense fallback={<>...</>}>
              <Bank />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/about/membership"
          element={
            <React.Suspense fallback={<>...</>}>
              <Membership />
            </React.Suspense>
          }
        />

        <Route
          exact
          path="/coop/principles"
          element={
            <React.Suspense fallback={<>...</>}>
              <CoopPrinciple />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/coop/history"
          element={
            <React.Suspense fallback={<>...</>}>
              <History />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/coop/about_coop"
          element={
            <React.Suspense fallback={<>...</>}>
              <AboutCoop />
            </React.Suspense>
          }
        />

        <Route
          exact
          path="/program"
          element={
            <React.Suspense fallback={<>...</>}>
              <Program />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/contact"
          element={
            <React.Suspense fallback={<>...</>}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/annual_report"
          element={
            <React.Suspense fallback={<>...</>}>
              <AnnualReport />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/downloads"
          element={
            <React.Suspense fallback={<>...</>}>
              <Downloads />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/schemes"
          element={
            <React.Suspense fallback={<>...</>}>
              <Schemes />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/admin"
          element={
            <React.Suspense fallback={<>...</>}>
              <Admin />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/suggestion-box"
          element={
            <React.Suspense fallback={<>...</>}>
              <SuggestionBox />
            </React.Suspense>
          }
        />
        <Route exact path="/not_found" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
