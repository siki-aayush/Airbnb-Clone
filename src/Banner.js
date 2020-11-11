import React, { useState } from 'react'
import { Button } from '@material-ui/core'

import Search from './Search'
import './Banner.css'
import { useHistory } from 'react-router-dom';


function Banner() {
    const [showSearch, setshowSearch] = useState(false);
    const history = useHistory()

    return (
        <div className='banner'>
            <div className="banner__search">
                {showSearch && <Search />}
                <Button
                    onClick={() => setshowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant='outlined'>
                    {showSearch ? "Hide" : "search dates"}
                </Button>
            </div>

            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems ner you</h5>
                <Button variant='outlined' onClick={() => history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
