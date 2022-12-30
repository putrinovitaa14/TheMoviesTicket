import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { Router, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../components/Slider";
import { fetchMovies, getGenres } from "../store";
import { RiTicket2Fill, RiTicket2Line } from "react-icons/ri";
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";

export default function Tmovies() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.tmovies.genresLoaded);
  const movies = useSelector((state) => state.tmovies.movies);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [genres, setGenres] = useState([]);

  // const router = useRouter();
  // const { id } = router.query;

  const getGenres = async () => {
    setIsLoading(true);

    await axios
      .get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then((res) => {
        setGenres(res.data?.genres);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.message);
      });

    setIsLoading(false);
  };

  // const getMovies = async (id) => {
  //   setIsLoading(true);

  //   console.log("function dalam", data);
  //   await axios.get("url", {
  //     params: {
  //       id: id,
  //     },
  //   });

  //   setIsLoading(false);
  // };

  const postGenres = async (data) => {
    setIsPostLoading(true);

    await axios
      .post("url", data)
      .then(async (res) => {
        getGenres();
      })
      .catch((err) => console.log(err));

    setIsPostLoading(false);
  };

  useEffect(() => {
    // dispatch(getGenres());
  }, []);

  useEffect(() => {
    // dispatch(fetchMovies({ type: "all" }));
  }, []);

  useEffect(() => {
    getGenres();
  }, []);

  // useEffect(() => {
  //   console.log("getmovie");
  //   if (id) getMovies(id);
  // }, [id]);

  // console.log(genres);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies);

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              href={"http://localhost:3013/"}
              target="_blank"
              onClick={() => navigate("/player")}
            >
              <FaPlay />
              Watch Trailer
            </button>
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/detail")}
            >
              <AiOutlineInfoCircle />
              More Detail
            </button>

            {/* <button
              className="flex j-center a-center"
              onClick={() => navigate("/ticket")}
            >
              <RiTicket2Fill />
              Get Ticket
            </button> */}
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100wv;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
