import { useState,useEffect } from "react";

export const GetMovieList = ()  => {
    const API = 'https://jsonmock.hackerrank.com/api/movies?Year=2015'
    const [movies,setMovies]=useState([]);

    useEffect(() => {
      fetch(API).then((response)=>response.json())
      .then((results)=>{

        setMovies(results)
        results.data.map(data => console.log(data.Title));
        



      }) 
     }, [])


      return movies;
    
    
  };
  