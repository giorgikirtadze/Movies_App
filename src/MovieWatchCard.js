import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './MovieWatch.css'
import WatchHeader from './WatchHeader';
import { useNavigate } from 'react-router-dom'
export default function MovieWatchCard() {
  let [product, setProduct] = useState([])

  let navigate = useNavigate()
  let handleNavigate = (patch) => {
    navigate(patch)
  }

  const { id } = useParams();
  console.log(id);
    
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=6976c974`);
        setProduct(data.data)
      } catch (error) {
        console.error('error', error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div>
      <WatchHeader />
      <div className='concretFilmContainer'>
        <div className='imgContainer'>
        <img
        src={product.Poster || "https://via.placeholder.com/400"} 
        alt={product.Title}
        onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/400"; 
        }}
    />
          {/* <img src={product.Poster} alt={product.Title}/> */}
        </div>
        <div className='filmContainerInfo'>
          <h1>{product.Title}</h1>
          <h1>Year: {product.Year}</h1>
          <h1>Released: {product.Released}</h1>
          <h1>Language: {product.Language}</h1>
          <h1>Country: {product.Country}</h1>
          <p className='actors'>Actors-{product.Actors}</p>
          <p className='plot'>Plot-{product.Plot}</p>
          <button onClick={() => handleNavigate('/')}>Watch</button>
        </div>
      </div>
    </div>
  );
}










// import axios from 'axios';

// const fetchData = async () => {
//   try {
//     const imdbID = "tt2705436";
//     const apiKey = "6976c9";
//     const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
//     const data = response.data;
//     console.log(data);
//     // Handle the fetched data as needed
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// fetchData();
