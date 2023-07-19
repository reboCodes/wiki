import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HowTo from './pages/HowTo';
import Test from './pages/Test';
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<HowTo />} />
          <Route path="/react-esbuild-guide" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);