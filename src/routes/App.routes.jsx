import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../common/components/layout/Layout";
import MoviesView from "../features/movies/views/MoviesView";
import MovieView from "../features/movies/views/MovieView";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="movies" element={<MoviesView />} />
          <Route path="movie" element={<MovieView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
