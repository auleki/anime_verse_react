import { useState } from 'react'
import MicIcon from '../assets/images/microphone.png'
import GoogleIcon from '../assets/images/google.png'
import SearchIcon from '../assets/images/search.png'
import SwordIcon from '../assets/images/swords.png'

const SearchButton = (props: any) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleButton = () => setCollapsed(!collapsed)
  const searchClass = `${collapsed ? "active" : ""} search__area`
  return (
    <form className={searchClass} onSubmit={(e) => props.findAnime(e, props.query)}>
      <img src={SwordIcon} className="mic__icon icon" alt="" />
      <input 
        type="text" 
        className="search" 
        placeholder="find anime..." 
        onChange={props.handleInput}
        value={props.query}/>
      <img src={SearchIcon} className="google__icon icon"  onClick={toggleButton}  alt="" />
    </form>
  )
}

export default SearchButton