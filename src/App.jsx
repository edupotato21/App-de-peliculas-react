import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.title} >Movies</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <LandingPage/> } />
          <Route exact path="/movies/:movieId" element={ <MovieDetails/> } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;