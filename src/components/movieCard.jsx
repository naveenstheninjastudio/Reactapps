import "./movieCard.css";
export function MovieCard(props) {
  return (
    <div className="movieCard">
      <div className="moviePoster"></div>
      <div className="movieDetails">
        <div className="movieTitle">{props.title}</div>
        <div className="movieReleaseDate">{props.release_date}</div>
        <div className="movieVotes">{props.vote_average}</div>
        <div className="movieOverview">overview</div>
      </div>
    </div>
  );
}
