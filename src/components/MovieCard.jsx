import React from 'react';
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

export function MovieCard(props) {
  const { title, poster_path, id } = props.movie;
  const imageUrl = "https://image.tmdb.org/t/p/w300" + poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + id}>
        <img className={styles.movieImage} src={imageUrl} alt={title} width={230} height={345} />
        <div>{title}</div>
      </Link>
    </li>
  );
}