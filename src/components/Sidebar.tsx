import AnimeCard from "./AnimeCard";
import TopAnime from "./TopAnime";
const Sidebar = (props: any) => {
  return (
    <div className="sidebar page">
      <div className="title__section">
        <h1>5 Top Animes</h1>
      </div>
      <div className="top__list-section">
        {props.topAnimes.map((anime: any) => <TopAnime anime={anime} />)}
      </div>
    </div>
  )
}

export default Sidebar