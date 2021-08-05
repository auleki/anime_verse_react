import { useEffect, useState } from 'react';
import './assets/scss/main.css'
import Sidebar from './components/Sidebar';
import AnimeListing from './components/AnimeListing';
import Header from './components/Header';
import axios from 'axios';


function App() {
  const [topAnimes, setTopAnimes] = useState([])
  const [animeListing, setAnimeListing] = useState([])
  const baseUrl = 'https://api.jikan.moe/v3'
  const [query, setQuery] = useState("")

  const handleInput = (e: any) => setQuery(e.target.value)

  const GetTopAnime = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/top/anime/1/bypopularity`)
      setTopAnimes(data.top.slice(0, 5))
    } catch (error) {
      console.error(error);
    }
  }

  const FindAnime = async (e: any, queryText: string) => {
    e.preventDefault()
    try {
      const { data } = await axios.get(`${baseUrl}/search/anime?q=${queryText}&order_by=title&sort=asc&limit=9`)
      console.log(data);
      setAnimeListing(data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetTopAnime()
  }, [])
  
  return (
    <div className="app__container">
      <Header/>
      <div className="container">
        <Sidebar topAnimes={topAnimes}/>
        <AnimeListing 
          animeListing={animeListing}
          handleInput={handleInput} 
          query={query} 
          findAnime={FindAnime}/>
      </div>
    </div>
  );
}

export default App;
