import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import { fetchMovies, getGenres } from "../store";
import { firebaseAuth } from "../utils/firebase-config";

export default function TVShows(){

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const genresLoaded = useSelector((state) => state.tmovies.genresLoaded);
    const movies = useSelector((state) => state.tmovies.movies) 
    const genres = useSelector((state) => state.tmovies.genres) 

    const dispatch = useDispatch();

    useEffect(() => {   
        console.log("in use effect");
        dispatch(getGenres());
    }, []);


    // useEffect(()=> {
    //     if(genresLoaded) dispatch(fetchMovies({genres, type: "movies" }));
    // }, [genresLoaded]);

    useEffect(()=> {
        if(genresLoaded) dispatch(fetchMovies({ type: "tv" }));
    }, [genresLoaded]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };


    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if (currentUser) navigate("/");
    });

    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled}/>
            </div>
            <div className="data">
                <SelectGenre genres={genres} type="tv"/>
                {movies.length ? <Slider movies={movies} /> : <NotAvailable /> }
            </div>
        </Container>
    );
}

const Container = styled.div`
.data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;



// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Navbar from "../components/Navbar";
// import CardSlider from "../components/CardSlider";
// import { onAuthStateChanged } from "firebase/auth";
// import { firebaseAuth } from "../utils/firebase-config";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies, getGenres } from "../store";
// import SelectGenre from "../components/SelectGenre";
// import Slider from "../components/Slider";
// import NotAvailable from "../components/NotAvailable";

// function MoviePage() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const movies = useSelector((state) => state.netflix.movies);
//   const genres = useSelector((state) => state.netflix.genres);
//   const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getGenres());
//   }, []);

//   useEffect(() => {
//     if (genresLoaded) {
//       dispatch(fetchMovies({ genres, type: "movie" }));
//     }
//   }, [genresLoaded]);

//   const [user, setUser] = useState(undefined);

//   onAuthStateChanged(firebaseAuth, (currentUser) => {
//     if (currentUser) setUser(currentUser.uid);
//     else navigate("/login");
//   });

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   return (
//     <Container>
//       <div className="navbar">
//         <Navbar isScrolled={isScrolled} />
//       </div>
//       <div className="data">
//         <SelectGenre genres={genres} type="movie" />
//         {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
//       </div>
//     </Container>
//   );
// }

// const Container = styled.div`
//   .data {
//     margin-top: 8rem;
//     .not-available {
//       text-align: center;
//       color: white;
//       margin-top: 4rem;
//     }
//   }
// `;
// export default MoviePage;
