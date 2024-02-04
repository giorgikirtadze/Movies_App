import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Stylee from "./app.module.css";
import MovieCard from "./MovieCard";



let apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=6976c974'
export default function MoveContainer() {
  let [moviesTodo, setMoviesTodo] = useState([])
  let [searchTerm, setSearchTerm] = useState('')
  // let [filmname, setFilmname] = useState('')
  useEffect(() => {
    awaitApi('spiderMan')
  }, []);

    const awaitApi = async (title) => {
      try {
        let {data} = await axios.get(`${apiUrl}&s=${title}`);
        // console.log(data);
        setMoviesTodo(data.Search)
      } catch (error) {
        console.log(error);
      }
    };


    const reFreshPage = () => {
      awaitApi('spiderMan')
      setSearchTerm('')
    }
// console.log(moviesTodo);
  return (
    <div className={Stylee.app}>
      <h1 onClick={reFreshPage}>MovieLand</h1>

      <div className={Stylee.search}>
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon
          onClick={() => awaitApi(searchTerm)}
          className={Stylee.iconImg}
          icon={faMagnifyingGlass}
        />
      </div>

      {moviesTodo.length > 0 ? (
        <div className={Stylee.container}>
          {moviesTodo.map((movie) => (
            <MovieCard key={movie.key} movie={movie}/>
          ))}
        </div>
      ) : (
        <div className={Stylee.empty}>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}