import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavIcon from '../assets/comic-sense-logo-noxyz.png';

function Navbar() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const history = useHistory();

    const handleScroll = () => {
        const currentScrollPos = window.pageXOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    return (
        <nav className='navbar' style={{top: visible ? '0' : '-60px'}}>
            <div className='navbarIcon'><img className='navbarIcon' src={NavIcon}></img></div>
            <div className='navbarCategories'>
                <div className='navCatButton'>
                    Men
                </div>
                <div className='navCatButton'>
                    Women
                </div>
            </div>
            <div className='navbarOptions'>
                <div className='navInpWrapper'>

                    <input type="text" className='navInput' placeholder="Let's match our interests..." />
                </div>
                <div onClick={() => {history.push('/profile')}}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png" />
                </div>
                <div onClick={() => {history.push('/wishlist')}}>
                    <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" />
                </div>
                <div onClick={() => {history.push('/cart')}}>
                    <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart-with-money.png" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar