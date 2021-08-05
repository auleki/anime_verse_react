import { useState } from 'react'
import MicIcon from '../assets/images/microphone.png'
import GoogleIcon from '../assets/images/google.png'
import SearchIcon from '../assets/images/search.png'
import SwordIcon from '../assets/images/swords.png'

const SearchButton = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [query, setQuery] = useState("")
  const toggleButton = () => setCollapsed(!collapsed)
  const handleInput = (e: any) => setQuery(e.target.value)
  const searchClass = `${collapsed ? "active" : ""} search__area`
  return (
    <div className={searchClass}>
      <img src={SwordIcon} className="mic__icon icon" alt="" />
      <input 
        type="text" 
        className="search" 
        placeholder="find anime..." 
        onChange={handleInput}
        value={query}/>
      <img src={SearchIcon} className="google__icon icon"  onClick={toggleButton}  alt="" />
    </div>
  )
}

export default SearchButton