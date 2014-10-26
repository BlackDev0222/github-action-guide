import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "../constants";
import * as Pages from "../pages";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.AUTH.SIGNIN} element={<Pages.Auth.SignInPage />} />
        <Route path={PATH.AUTH.SIGNUP} element={<Pages.Auth.SignUpPage />} />
        <Route path={PATH.OTHERS} element={<Pages.NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
