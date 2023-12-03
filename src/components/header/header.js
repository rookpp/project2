import React from 'react'
import "./_header.scss"

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"

const Header = () => {
  return (
    <div className='border border-dark'>
      <FaBars className="header__menu" size={26}/>
      <img src="https://www.svgrepo.com/download/156646/play-button.svg" alt="logo" className="header__logo"/>
      <form>
        <input type="text" placeholder="Search"/>
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/640px-Icon-round-Question_mark.svg.png" alt="avatar"/>
      </div>
    </div>
  )
  
}

export default Header
