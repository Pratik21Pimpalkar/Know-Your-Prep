import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Homepage from "./Home/Pages/Homepage";
import Register from "./Home/Pages/Register";
import Login from "./Home/Pages/Login";
import PageNotFound from "./Analysis/pages/PageNotFound";
import Dashboard from "./Analysis/pages/Dashboard";
import RequireAuth from "./Analysis/pages/RequireAuth";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
