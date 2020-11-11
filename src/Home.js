import React from 'react'

import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home__section">
                <Card
                    src="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                    title="peace N park"
                    description="Stay in the heart of Kathmandu – Excellent location - show map
                Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                    price="200$"
                />
                <Card
                    src="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                    title="peace N park"
                    description="Stay in the heart of Kathmandu – Excellent location - show map
                Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                    price="200$"
                />
                <Card
                    src="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                    title="peace N park"
                    description="Stay in the heart of Kathmandu – Excellent location - show map
                Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                    price="200$"
                />

            </div>
            <div className="home__section">
                <Card
                    src="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                    title="peace N park"
                    description="Stay in the heart of Kathmandu – Excellent location - show map
                Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                    price="200$"
                />
                <Card
                    src="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                    title="peace N park"
                    description="Stay in the heart of Kathmandu – Excellent location - show map
                Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                    price="200$"
                />
                <Card
                    src="https://miro.medium.com/max/3000/1*X1K4Zi_mTg94imnWW-zfUw.jpeg"
                    title="peace N park"
                    description="Stay in the heart of Kathmandu – Excellent location - show map
                Peace N park Hotel Rooms features a restaurant, bar, a shared lounge and garden in Kathmandu"
                    price="200$"
                />

            </div>
        </div>
    )
}

export default Home
