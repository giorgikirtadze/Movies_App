import React from 'react'
import Stylee from './app.module.css'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie:  {imdbID, Year, Poster, Title, Type }}) => {
    const navigate = useNavigate();
    const handleNavigate = (patch) => {
      navigate(patch);
    };

  return (
    <div className={Stylee.movie} key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        {/* <img src={Poster} alt={Title}/> */}
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3 onClick={() => handleNavigate(`/MovieWatchCard/${imdbID}`)}>{Title}</h3>
      </div>
    </div>  )
}
export default MovieCard;