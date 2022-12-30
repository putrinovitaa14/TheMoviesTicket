import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Player from "./pages/Player";
import Singup from "./pages/Singup";
import Tmovies from "./pages/Tmovies";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Detail from "./pages/Detail";
import Ticket from "./pages/Ticket";
import Select from "./Select";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Singup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/ticket" element={<Ticket />} />
        <Route exact path="/select" element={<Select />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/" element={<Tmovies />} />
      </Routes>
    </BrowserRouter>
  );
}
