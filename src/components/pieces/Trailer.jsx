
const Trailer = ({trailer}) => {
  return (
      <div className="video-responsive" >
            <iframe
                  width="800"
                  height="400"
                  src={trailer}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
            />
      </div>
  )
}

export default Trailer