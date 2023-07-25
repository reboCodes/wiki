import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import ReactEsbuildGuide from './pages/ReactEsbuildGuide';
import Home from './pages/Home';

// import components
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/react-esbuild-guide" element={<ReactEsbuildGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);