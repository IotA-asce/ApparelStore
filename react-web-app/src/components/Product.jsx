import React from 'react'

const Product = () => {
    return (
        <div className='product' style={{ width: "100vw", height: "100vh", backgroundImage: "url(https://source.unsplash.com/random)", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center center", display: "flex", alignItems: "flex-end", justifyContent: "center", }}>
            <div className='productInfo' style={{ width: "60%", height: "10em", backgroundColor: "white", bottom: "0", margin: "5em", display: "flex", justifyContent: "space-around", alignItems: "center" }} >
                <div className='pdctDesc'>
                    <div>
                        Prouct name
                    </div>
                    <div style={{ color: 'gray'}}>
                        Rs 599
                    </div>
                </div>
                <div>  
                    <button style={{ border: "0.3em solid black", backgroundColor: "black", marginRight: "1em", color: "white", padding: "1.2em" }} >Buy now</button>
                    <button style={{ border: "0.3em solid black", padding: "1em", fontWeight: "900",  backgroundColor: "white" }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product