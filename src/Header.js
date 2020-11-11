import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'


import './Header.css'
function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header__icon'
                    src='https://responsivedesign.is/wp-content/uploads/2016/11/airbnb_fiw4mc_nnjmpj-1.png'
                    alt='airbnb logo'
                />
            </Link>

            <div className="header__center">
                <input type='text' />
                <SearchIcon className='header__search' />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
