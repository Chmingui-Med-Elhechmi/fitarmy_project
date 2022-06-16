import React from 'react'
// import Navbar from './Navbar'
import Footer from './Footer'
import vid from '../assets/180419_Boxing_A1_04.mp4';

const Produit = () => {
 
    return (
        <main>
            {/* <Navbar /> */}
            <div className="about-page">
                <video autoPlay playsInline muted loop className="about-page-hero">
                    <source src={vid} type="video/mp4"/>
                </video>
            </div>
            
           <Footer />
        </main>
    )
}

export default Produit
