import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  // console.log(movies);

  const [film, setFilm] = useState([]);
  const [isLoadingFilm, setIsLoadingFilm] = useState(false);
  const [filmTrending, setFilmTrending] = useState([]);
  const [isLoadingFilmTrending, setIsLoadingFilmTrending] = useState(false);
  const [filmPopular, setFilmPopular] = useState([]);
  const [isLoadingFilmPopular, setIsLoadingFilmPopular] = useState(false);
  const [filmToprated, setFilmToprated] = useState([]);
  const [isLoadingFilmToprated, setIsLoadingFilmToprated] = useState(false);
  const [filmUpcomming, setFilmUpcomming] = useState([]);
  const [isLoadingFilmUpcomming, setIsLoadingFilmUpcomming] = useState(false);

  const getFilm = async () => {
    setIsLoadingFilm(true);

    await axios.get("http://192.168.1.4:8000/api/Movies").then((res) => {
      const mappedData = res.data.map((val) => {
        return {
          id: val.id,
          image: `${`http://192.168.1.4:8000`}/${val.img}`,
          name: val.name,
          video: `${`http://192.168.1.4:8000`}/${val.vid}`,
          genres: [],
        };
      });
      setFilm(mappedData);
    });

    setIsLoadingFilm(false);
  };

  const getFilmTrending = async () => {
    setIsLoadingFilmTrending(true);

    await axios
      .get("http://192.168.1.4:8000/api/Movies/trending")
      .then((res) => {
        const mappedData = res.data.map((val) => {
          return {
            id: val.id,
            image: `${`http://192.168.1.4:8000`}/${val.img}`,
            name: val.name,
            video: `${`http://192.168.1.4:8000`}/${val.vid}`,
            genres: [],
          };
        });
        setFilmTrending(mappedData);
      });

    setIsLoadingFilmTrending(false);
  };

  const getFilmPopular = async () => {
    setIsLoadingFilmPopular(true);

    await axios
      .get("http://192.168.1.4:8000/api/Movies/popular")
      .then((res) => {
        const mappedData = res.data.map((val) => {
          return {
            id: val.id,
            image: `${`http://192.168.1.4:8000`}/${val.img}`,
            name: val.name,
            video: `${`http://192.168.1.4:8000`}/${val.vid}`,
            genres: [],
          };
        });
        setFilmPopular(mappedData);
      });

    setIsLoadingFilmPopular(false);
  };

  const getFilmToprated = async () => {
    setIsLoadingFilmToprated(true);

    await axios
      .get("http://192.168.1.4:8000/api/Movies/toprated")
      .then((res) => {
        const mappedData = res.data.map((val) => {
          return {
            id: val.id,
            image: `${`http://192.168.1.4:8000`}/${val.img}`,
            name: val.name,
            video: `${`http://192.168.1.4:8000`}/${val.vid}`,
            genres: [],
          };
        });
        setFilmToprated(mappedData);
      });

    setIsLoadingFilmToprated(false);
  };

  const getFilmUpcomming = async () => {
    setIsLoadingFilmUpcomming(true);

    await axios
      .get("http://192.168.1.4:8000/api/Movies/upcomming")
      .then((res) => {
        const mappedData = res.data.map((val) => {
          return {
            id: val.id,
            image: `${`http://192.168.1.4:8000`}/${val.img}`,
            name: val.name,
            video: `${`http://192.168.1.4:8000`}/${val.vid}`,
            genres: [],
          };
        });
        setFilmUpcomming(mappedData);
      });

    setIsLoadingFilmUpcomming(false);
  };

  //   console.log("ini film", film);

  useEffect(() => {
    getFilm();
    getFilmTrending();
    getFilmPopular();
    getFilmToprated();
    getFilmUpcomming();
  }, []);

  return (
    <div>
      {isLoadingFilm ? (
        <h1>Loading...</h1>
      ) : (
        <CardSlider title="Trending Now" data={filmTrending} />
      )}
      <CardSlider title="Popular Movies" data={filmPopular} />
      <CardSlider title="Top Rated" data={filmToprated} />
      <CardSlider title="Up Comming" data={filmUpcomming} />
      {/* <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} /> */}
    </div>
  );
}
