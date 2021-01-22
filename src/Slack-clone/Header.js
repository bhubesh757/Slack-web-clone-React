import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import React from 'react'

// Icons
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './Header.css'
import { useStateValue } from '../StateProvider';
function Header() {
    // usestatevalue
    const [{user}] = useStateValue();
    return (
        <div className = 'header'>
            {/* <h1>I am Header</h1> */}
            {/* HeaderLeft */}
                <div className="header__left">
                    {/* Avatar loginned user */}
                    <Avatar src = {user?.photoURL} alt = {user?.displayName}
                     className = 'header__avatar'></Avatar>
                    {/* time */}
                    <AccessTimeIcon></AccessTimeIcon>
                </div>

                <div className="header__Search">
                    {/* Search Icon */}
                    <SearchIcon></SearchIcon>
                    {/* Input */}
                    <input type = 'text ' className = 'header__inputtext' placeholder = 'Search Slack'></input>
                </div>

                <div className="header__right">
                    {/* help Icon */}
                    <HelpOutlineIcon></HelpOutlineIcon>
                </div>
        </div>
    )
}

export default Header
