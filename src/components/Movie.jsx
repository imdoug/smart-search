import { useParams } from "react-router-dom";
import { getData } from '../data/data'
import MovieInfo from "./pieces/MovieInfo";
import Trailer from "./pieces/Trailer";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const Movie = () => {
      let { id } = useParams();
      let movie = getData(parseInt(id));
      const navigate = useNavigate()
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <MovieInfo movie={movie}/>
      </div>
      <Trailer trailer={movie.trailer} />
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Button  style={{marginTop: 10, marginBottom: 10}}variant='outlined'  onClick={()=>{navigate('/')}}>Go Back</Button>
      </div>
    </>
  )
}

export default Movie