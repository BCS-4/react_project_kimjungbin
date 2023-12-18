import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import My from "./pages/my";
import Sale from "./pages/sale";
import Layout from "./components/Layout";
import Detail from "./pages/detail";
import Snowfall from "./Snowfall";

const App: FC = () => {
  return (
    <div style={{ background: "bg-green-200" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/my" element={<My />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/detail/:tokenId" element={<Detail />} />
          </Route>
        </Routes>
        <Snowfall />
      </BrowserRouter>
    </div>
  );
};

export default App;
