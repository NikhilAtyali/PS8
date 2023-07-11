import React, { useEffect, useState } from "react";
import { moviesApi } from "./api";
const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedYear, setSelectedYear] = useState('')
  useEffect(() => {
    const fetchMoview = async () => {
      const response = await moviesApi("https://example.com/api/movies");
      try {
        setMovieList(response.data);
      } catch (error) {
        console.error("Error: ", error.message);
      }
    };
    fetchMoview();
  }, []);

  const handleYearChange =(event)=>{
    setSelectedYear(event.target.value)
  }

  const filteredMovieList = selectedYear ? movieList.filter(movie=> movie.year === parseInt(selectedYear)) : movieList
  return (
    <div>
      <h2>Movies</h2>
      <div>
        <span>
          <h3>Filter By Year </h3>
        </span>
        <select name="movies" value={selectedYear} onChange={handleYearChange}>
          <option value="">All</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
        </select>
      </div>
      <ul>
        {filteredMovieList.map((movie) => {
          return (
            <li key={movie.title}>
              <p>Name:{movie.title}</p>
              <p>Year:{movie.year}</p>
              <p>Rating:{movie.rating}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
