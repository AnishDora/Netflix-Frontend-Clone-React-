import React,{useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import './Header.css'
import NotificationsIcon from "@material-ui/icons/Notifications"
import {Link} from 'react-router-dom'


function Header()  {
    const[inputSearch,setInputSearch]= useState('')
    return (
        <div className="header">

        <div className="header__left">
        <MenuIcon/>
        <Link to="/">
        <img className="header__logo"
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"></img>
        </Link>
        
        </div>
        
        <div className="header__input">
        <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} placeholder="Search" type="text"></input>
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton"/>
        </Link>
        
        
        </div>
        
        <div className="header__icons">
        <VideoCallIcon className="header__icon"/> 
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        
        </div>
        
        </div>
    )
}

export default Header
