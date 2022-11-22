import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../common/components/layout/Layout";
import LoginView from "../features/login/views/LoginView";
import MoviesView from "../features/movies/views/MoviesView";
import MovieView from "../features/movies/views/MovieView";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />

        <Route
          path="movies"
          element={
            <Layout>
              <MoviesView />
            </Layout>
          }
        />
        <Route path="movie/:id" element={<MovieView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
