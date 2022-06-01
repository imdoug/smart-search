import { useParams } from "react-router-dom";
import { getData } from '../data/data'

const Movie = () => {
      let { id } = useParams();
      let movie = getData(parseInt(id));
      console.log(movie)
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <h2 style={{color: '#fff'}}>Movie: {movie.title}</h2>
    </div>
  )
}

export default Movie