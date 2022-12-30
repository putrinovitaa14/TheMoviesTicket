import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Movie = (movieData) => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [detailFilm, setDetailFilm] = useState([]);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  // console.log(id);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getDetail = async (id) => {
    setIsLoadingDetail(true);

    await axios.get(`http://192.168.1.4:8000/api/Movies/${id}`).then((res) => {
      // const mappedData = res.data.map((val) => {
      //   return {
      //     id: val.id,
      //     image: `${`http://192.168.1.4:8000`}/${val.img}`,
      //     name: val.name,
      //     desc: val.desc,
      //     price: val.price,
      //     klasifikasi: val.klasifikasi,
      //     relase: val.relase,
      //     durasi: val.durations,
      //     rate: val.rate,
      //     genres: [],
      //   };
      // });
      // console.log(res.data);
      setDetail(res.data[0]);
    });
    setIsLoadingDetail(false);
  };

  useEffect(() => {
    if (id) getDetail(id);
  }, [id]);

  const getData = () => {
    fetch(`http://192.168.1.4:8000/api/Movies/${id}`)
      // .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  console.log(detail);

  return (
    <Container className="movie flex j-center a-center">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`http://192.168.1.4:8000/${detail.img2}`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`http://192.168.1.4:8000/${detail.img}`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">{detail?.name}</div>
            {/* <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div> */}
            <div className="movie__rating">
              {/* {detail ? detail.rate : ""} */}
              <i class="fas fa-star" />
              <span className="movie__voteCount">
                {detail ? "(" + detail.rate + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {detail ? detail.duration + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {detail ? "Release date: " + detail.release : ""}
            </div>
            <div className="movie__genres">
              {/* {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""} */}
              <span className="movie__genre">{detail?.category?.title}</span>
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div className="synopsisdes">{detail?.desc}</div>
          </div>
        </div>
      </div>

      <div className="movie__links">
        <div className="movie__heading"></div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                Get Ticket<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="movie__heading"></div>
    </Container>
  );
};

const Container = styled.div`
  .movie {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .movie__intro {
    width: 80%;
  }

  .movie__backdrop {
    width: 2000px;
    position: absolute;
    z-index: -1;
    top: -10px;
    height: 500px;
    object-fit: cover;
    object-position: 0 35%;
  }

  .movie__detail {
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 75%;
    display: flex;
    bottom: 225px;
    font-weight: 500;
  }

  .movie__detailLeft {
    margin-right: 30px;
  }

  .movie__poster {
    width: 300px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
    // right: 500px;
  }

  .movie__detailRight {
    color: white;
    display: flex;
    flex-direction: column;
    height: 450px;
    justify-content: space-between;
  }

  .movie__detailRightTop > div {
    text-shadow: 0px 0px 5px #000000;
    margin-bottom: 0.5rem;
  }

  .movie__name {
    font-weight: 570;
    font-size: 3rem;
  }

  .movie__voteCount {
    margin-left: -2px;
    font-weight: 600;
  }

  .movie__genres {
    margin: 1.25rem 0;
    font-weight: 600;
  }

  .movie__genre {
    padding: 0.3rem;
    border: 2px solid white;
    border-radius: 10px;
    margin-right: 1rem;
  }

  .movie__detailRightBottom {
    margin: 2rem 0;
    flex: 0.8;
  }

  .synopsisText {
    font-size: 1.4rem;
    margin-bottom: 1.25rem;
    font-weight: 600;
    display: flex;
    position: relative;
    align-items: center;
    color: red;
    margin-top: -15px;
  }

  .synopsisdes {
    margin-top: -10px;
  }
  .synopsisText > div:last-of-type {
    margin-left: auto;
  }

  .movie__links {
    position: relative;
    bottom: 120px;
    display: flex;
    justify-content: space-between;
    width: 75%;
  }

  .movie__heading {
    font-size: 2.2rem;
  }

  .movie__Button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 2rem;
    border-radius: 20px;
    cursor: pointer;
    width: 150px;
    color: black;
    font-weight: bold;
  }

  .movie__homeButton {
    background-color: rgb(255, 0, 0);
  }

  .movie__imdbButton {
    background-color: #f3ce13;
  }

  .newTab {
    margin-left: 1.4rem;
  }

  // .movie__production {
  //   width: 85%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: flex-end;
  //   margin-bottom: 4rem;
  // }

  // .movie__productionComapany {
  //   width: 200px;
  //   margin: 2rem;
  // }

  // .productionCompanyImage {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }
`;

export default Movie;
