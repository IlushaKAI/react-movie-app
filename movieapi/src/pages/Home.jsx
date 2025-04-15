import React from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "John Wick", release_date: "2020" },
    { id: 3, title: "John Wick", release_date: "2020" },
  ];
  // затычка, чтобы проект работал, пока не реализовали весь функционал с useState и useEffect
  const loading = false;
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
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
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
