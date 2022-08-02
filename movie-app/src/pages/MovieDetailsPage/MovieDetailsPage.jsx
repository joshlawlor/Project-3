import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const MovieDetailsPage = ({backendURL, state}) => {
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const data = location.state
    // useEffect(()=>{
    //   async function getMovieDetails() {
    //     await fetch(`${backendURL}/movies/${data.movie.id}`,{method: "GET", headers: new Headers({'content-Type': 'application/json'})})
    //     .then(res=>{
    //       console.log(res);
    //       if(!res.ok){
    //         console.log(res.body);
    //       }else{
    //         return res.json();
    //       }
    //     }).then(response=>{
    //       console.log(response);
    //       setMovie([...response]);
    //     })
    //     .catch(err =>{
    //       console.log(err);
    //     })
    //   }
    // getMovieDetails();
    // console.log(data.movie)
    // },[]);

    

  return (
    <div>
        <img src={data.movie.image} alt=""></img>
        <h1>{data.movie.fullTitle}</h1>
        <h2>imDb Rating: {data.movie.imDbRating}</h2>
        <h3>Crew: {data.movie.crew}</h3>
        <button>Add to Watchlist</button>
        {/* Can add to watchlist by doing a push using data.movie */}
        <br/>
        <button>Add a Review</button>
        <br/>
        <button>Add to Favorites</button>
    </div>
  )
}

export default MovieDetailsPage