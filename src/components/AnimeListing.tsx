import AnimeCard from "./AnimeCard"
import SearchButton from "./SearchButton"

const AnimeListing = () => {
  return (
    <div className="anime__listing page">
      <div className="title__section">
        <h1>ANIME VERSE LISTING</h1>        
      </div>
      <SearchButton />      
      <div className="listings">
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
      
    </div>
  )
}

export default AnimeListing