"use client";

import { baseImgUrl } from "@lib/constants";
import { Movie } from "@lib/types";
import { useState } from "react";
import Modal from "./Modal";


const MovieCard = ({ movie }: { movie: Movie }) => {
  const[showModal,setShowmodal]=useState(false);

  const openModal=()=> setShowmodal(true);
  const closeModal =() => setShowmodal(false);
  

  return (
    <>
      <div className="movie-card" onClick={openModal} >
        <img
          src={
            movie?.backdrop_path || movie?.poster_path
              ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
              : "/assets/no-image.png"
          }
              className="thumbnail"
          alt={movie?.title || movie?.name}
        />
        <div className="border"></div>
      </div>
{showModal && <Modal movie={movie} closeModal={closeModal}/>}
     
    </>
  );
};

export default MovieCard;