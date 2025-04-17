import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../../../components/pages/HomePage";
import WorkDetailPage from "../../../components/pages/WorkDetailPage";
import WorksPage from "../../../components/pages/WorksPage";
import NotFoundPage from "../../../components/pages/NotFoundPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="/:id" element={<WorkDetailPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
