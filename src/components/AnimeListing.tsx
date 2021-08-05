import AnimeCard from "./AnimeCard"
import SearchButton from "./SearchButton"

const AnimeListing = (props: any) => {

  // if (props.animeListing.length === 0) {
  //   return
  // }
  
  return (
    <div className="anime__listing page">
      <div className="title__section">
        <h1>Animes</h1>        
      </div>
      <SearchButton 
        handleInput={props.handleInput} 
        findAnime={props.findAnime}
        query={props.query}/>      
      <div className="listings">
        {props.animeListing.length === 0 &&  (
          <div className="empty__list">
            <h2>LIST EMPTY</h2>
            <p>Search for an anime</p>
          </div>
    )}
        {props.animeListing.map((anime: any) => <AnimeCard anime={anime} />)}
      </div>
      
    </div>
  )
}

export default AnimeListing