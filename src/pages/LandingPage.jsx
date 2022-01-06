import React from 'react';
import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from "../components/Search";

export function LandingPage() {
  return(
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}