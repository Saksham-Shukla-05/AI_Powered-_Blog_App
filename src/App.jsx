import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import LayoutPage from "./pages/Layout";
import DashBoard from "./pages/DashBoard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";
import GenerateImages from "./pages/GenerateImages";
import RemoveBg from "./pages/RemoveBackground";
import RemoveObj from "./pages/RemoveObject";
import ReviewResume from "./pages/ReviewResume";
import Community from "./pages/Community";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/ai" element={<LayoutPage />}>
          <Route index element={<DashBoard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="remove-bg" element={<RemoveBg />} />
          <Route path="remove-obj" element={<RemoveObj />} />
          <Route path="resume-review" element={<ReviewResume />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
