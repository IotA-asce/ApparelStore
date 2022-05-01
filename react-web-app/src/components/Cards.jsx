import React from 'react'
import { computeDiscount } from './Utils';
import { useState, useEffect } from 'react';

const ProductDisplayCard = ({ pImageLink, pTitle, pPrice, pDiscountedRate }) => {

    const [isDiscounted, setIsDiscounted] = useState(false);

    useEffect(() => {
        if (pDiscountedRate !== 0) setIsDiscounted(true)
    }, [pDiscountedRate])

    return (
        <div className='dispCard'>
            <div className='dispCardImgWrapper'>
                <img className='dispCardImg' src={pImageLink} alt={pTitle}></img>
            </div>
            <div className='dispCardInfo'>
                <div className='dispCardTitle'>{pTitle}</div>
                {
                    isDiscounted ?
                        <div className='dispCardPrice'>       {/* DISCOUNTED PRICE WILL HAVE SLASHED ORIGINAL PRICE */}
                            <div className='disCardPriceStrike'>
                                <s>
                                    ₹{pPrice}
                                </s>
                            </div>
                            <div>
                                <p className='bolderPrice'>
                                    {/* ₹{computeDiscount(pPrice, pDiscountedRate)} */}
                                    ₹{computeDiscount(pPrice, pDiscountedRate)}
                                </p>
                            </div>
                        </div> :
                        <div className='dispCardPrice'>
                            <div>₹ {pPrice}</div>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductDisplayCard