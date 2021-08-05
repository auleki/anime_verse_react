const TopAnime = (props: any) => {
  // console.log('TOP ANIME ++', props);
  return (
    <a 
      href={props.anime.url} 
      target="_blank" 
      rel="noreferrer" 
      className="top__list" 
      key={props.anime.mal_id}>
      <img src={props.anime.image_url} alt="" />
      <p>{props.anime.title}</p>
    </a>
  )
}

export default TopAnime