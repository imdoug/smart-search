const MovieInfo = ({movie}) => {
  return (
        <>
            <div style={{display: 'flex', marginBottom: 40}}>
                  <div style={{marginRight: 45}}>
                        <img style={{width: 350, borderRadious: 32}} src={movie.cover ?  movie.cover : ''} alt='Star-Wars New Hope poster'/>
                  </div>
                  <div style={{color: '#fff', textShadow: 3.5, width: 300}}>
                        <h1>{movie.title}</h1>
                        <h3 style={{marginBottom: 50}}>Realesed on : {movie.release}</h3>
                        <p style={{fontSize: 16}}>Synopsis: {movie.synopsis ? movie.synopsis : ''}</p>
                  </div>
            </div>
      </>
  )
}

export default MovieInfo