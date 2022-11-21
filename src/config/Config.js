import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";
const Home = lazy(() => import("../pages/Home"));
const Lyrics = lazy(() => import("../pages/Lyrics"));
const Config = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* <------Regular Routes------> */}
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/lyrics/:id" element={<Lyrics />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default Config;
