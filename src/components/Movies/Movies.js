import { useState } from "react";
import { nanoid } from "nanoid";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data";

function Movies() {
  // Membuat state movies
  const [movies, setMovies] = useState(data);

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Doraemon",
      year: 2026,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>Latest Movies</h2>
          <div className={styles.movie__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
          <button onClick={handleClick}>Add Movie</button>
        </section>
      </div>
    </div>
  );
}

export default Movies;
