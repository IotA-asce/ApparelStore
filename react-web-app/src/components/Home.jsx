import React from 'react'
import Discounted from './Discounted'
import NewArrivals from './NewArrivals'

function Home() {
    return (
        <div>
            <NewArrivals />
            <Discounted />
        </div>
    )
}

export default Home