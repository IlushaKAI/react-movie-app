import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();

        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Не получилось загрузить фильмы");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  function handleSearch() {
    alert("Отправили запрос на поиск");
  }

  return (
    <div className="home">
      {/* Форма поиска фильмов */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Найти фильм"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Отображаем сообщение об ошибке, если она есть */}
      {/* {error && <div className="error-message">{error}</div>} */}

      {/* Условный рендеринг: показываем индикатор загрузки или список фильмов */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {/* Отображаем каждый фильм в виде карточки */}
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
