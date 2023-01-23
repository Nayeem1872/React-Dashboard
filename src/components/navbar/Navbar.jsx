import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import pic from "./0.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
    <div className="search">
      <input type="text" placeholder='Search....' />
      <SearchIcon/>
    </div>
      <div className="items">
        <div className="item">
        <LanguageIcon className='icon'/>English
        </div>
        <div className="item">
        <MenuIcon className='icon'/>English
        </div>
        <div className="item">
        <NotificationsNoneOutlinedIcon className='icon'/>
        <div className="counter">1</div>
        </div>
        <div className="item">
        <GppMaybeOutlinedIcon className='icon'/>
        <div className="counter">2</div>
        </div>
        <div className="item">
        <CategoryIcon className='icon'/>English
        </div>
        <div className="item">
          <img src={pic} alt='' className="avatar" 
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
