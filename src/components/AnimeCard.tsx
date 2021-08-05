const AnimeCard = (props: any) => {
  // console.log('ANIME =>', props);
  return (
    <a 
      href={props.anime.url} 
      target="_blank" 
      rel="noreferrer" 
      className="anime__card" 
      key={props.anime.mal_id}>
      <div className="info">
        <section>
          <span className="sub__title">Synopsis</span>
          <p>{props.anime.synopsis}</p>
        </section>
        <section>
          <span className="sub__title">Rating</span>
          <p>{props.anime.rated}</p>
        </section>
        <section>
          <span className="sub__title">Episodes</span>
          <p>{props.anime.episodes}</p>
        </section>
        <section>
          <span className="sub__title">Scores</span>
          <p>{props.anime.score}</p>
        </section>
      </div>
      <div className="anime__image">
        <img src={props.anime.image_url} alt="" />
      </div>
      <h2 className="anime__title">{props.anime.title}</h2>
    </a>
  )
}

export default AnimeCard