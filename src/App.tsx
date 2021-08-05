import { useEffect, useState } from 'react';
import './assets/scss/main.css'
import Sidebar from './components/Sidebar';
import AnimeListing from './components/AnimeListing';
import Header from './components/Header';
import axios from 'axios';


function App() {
  const [topAnimes, setTopAnimes] = useState([])
  const baseUrl = 'https://api.jikan.moe/v3'

  const GetTopAnime = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/top/anime/1/bypopularity`)
      // console.log(data.top);
      setTopAnimes(data.top.slice(0, 5))
    } catch (error) {
      console.error(error);
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
        <AnimeListing />
      </div>
    </div>
  );
}

export default App;
