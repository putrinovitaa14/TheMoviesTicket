import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill, RiTicket2Line } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";

export default function Card({ detail, movieData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        // src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        src={movieData.image}
        alt="movie"
      />
      {/* 
      {film?.map((data) => (
        <div>
          <img src={`${`http://192.168.1.4:8000`}/${data.img}`} alt="movie" />
          <h1>{data.name}</h1>
        </div>
      ))} */}

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              // src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              src={movieData.image}
              alt="movie"
              onClick={() => navigate(`/detail/${movieData.id}`)}
            />
            <video
              // src={video1}
              src={movieData.video}
              autoPlay
              loop
              muted
              onClick={() => navigate(`/detail/${movieData.id}`)}
            />
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                {/* <RiThumbDownFill title="Dislike" /> */}
                {isLiked ? (
                  <BsCheck title="Remove From List" />
                ) : (
                  <AiOutlinePlus title="Add to My List" />
                )}

                <RiTicket2Line
                  className="flex j-center a-center"
                  onClick={() => navigate("/ticket")}
                />
              </div>

              <div className="info">
                <BiChevronDown
                  title="More Info"
                  onClick={() => navigate(`/detail/${movieData.id}`)}
                />
              </div>
            </div>
            {/* <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div> */}
            {/* <div className="genres flex">
              <ul className="flex">{detail?.category?.title}</ul>
            </div> */}
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;

  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 90%;
    z-index: 10;
  }

  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.1s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
        transition: all 0.1s;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
        transition: all 0.3s ease-out;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
