import React from 'react'
import ProductDisplayCard from './Cards'

function Discounted() {
    return (
        <div className='discounted'>
            <div className='discountedTitle'>
                <p>
                    UNBELIEVABLE DISCOUNTS
                </p>
            </div>
            <div className='discountedCards'>
                {/* MAP THE LIST OF PRODUCTS */}
                <ProductDisplayCard
                    pImageLink="https://source.unsplash.com/random"
                    pTitle="test title"
                    pPrice={1500}
                    pDiscountedRate={0}
                />
                <ProductDisplayCard
                    pImageLink="https://source.unsplash.com/random"
                    pTitle="test title"
                    pPrice={1500}
                    pDiscountedRate={2}
                />

            </div>
        </div>
    )
}

export default Discounted