import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Home1 = React.lazy(() => import("pages/Home1"));
const Registration = React.lazy(() => import("pages/Registration"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Donors = React.lazy(() => import("pages/Donors"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home1" element={<Home1 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
