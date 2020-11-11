import { Button } from '@material-ui/core'
import React from 'react';

import './SearchPage.css'
import SearchResult from './SearchResult';
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 styas . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>
                    Cancellation Flexibility
                </Button>
                <Button variant='outlined'>
                    Type of place
                </Button>
                <Button variant='outlined'>
                    Pirce
                </Button>
                <Button variant='outlined'>
                    Rooms and beds
                </Button>
                <Button variant='outlined'>
                    More filters
                </Button>
            </div>
            <SearchResult
                img="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                title="peace N park"
                location="unknown"
                description="Stay in the heart of Kathmandu. Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                star={4.73}
                price="200$"
                total="$999"
            />

            <SearchResult
                img="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                title="peace N park"
                location="unknown"
                description="Stay in the heart of Kathmandu. Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                star={4.73}
                price="200$"
                total="$999"
            />

            <SearchResult
                img="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                title="peace N park"
                location="unknown"
                description="Stay in the heart of Kathmandu. Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                star={4.73}
                price="200$"
                total="$999"
            />

            <SearchResult
                img="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                title="peace N park"
                location="unknown"
                description="Stay in the heart of Kathmandu. Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                star={4.73}
                price="200$"
                total="$999"
            />

            <SearchResult
                img="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                title="peace N park"
                location="unknown"
                description="Stay in the heart of Kathmandu. Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                star={4.73}
                price="200$"
                total="$999"
            />

            <SearchResult
                img="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                title="peace N park"
                location="unknown"
                description="Stay in the heart of Kathmandu. Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                star={4.73}
                price="200$"
                total="$999"
            />

            <SearchResult
                img="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                title="peace N park"
                location="unknown"
                description="Stay in the heart of Kathmandu. Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                star={4.73}
                price="200$"
                total="$999"
            />
        </div>
    )
}

export default SearchPage
