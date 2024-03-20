import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subjectlist from "./components/Subjectlist";
import Subject from "./components/Subject";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Subjectlist />} />
        <Route
          path="/Signal and System"
          element={<Subject subjectName="signal" />}
        />
        <Route
          path="/Discrete Mathematics"
          element={<Subject subjectName="discrete" />}
        />
        <Route
          path="/Numerical Analysis and Probability"
          element={<Subject subjectName="numerical" />}
        />
        <Route
          path="/Software Engineering"
          element={<Subject subjectName="soft" />}
        />
        <Route
          path="/Design and Analysis of Algorithm"
          element={<Subject subjectName="daa" />}
        />
        <Route
          path="/Computer Architecture"
          element={<Subject subjectName="arch" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
