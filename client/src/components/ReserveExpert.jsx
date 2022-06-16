import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import {FaChevronCircleLeft} from 'react-icons/fa';
// import Navbar from './Navbar';
import Footer from './Footer';
import PickTime from '../components/PickTime/PickTime'

import vid from '../assets/180419_Boxing_19_29.mp4';

const ReserveExpert = (props) => {
    // const slug = props.match.params.id;
    // const [...trainers] =  useContext(TrainerContext);
    // const expert =  (trainers.filter(trainer => trainer.slug === slug))[0];
    
    // if(!expert){
    //     return <Redirect to='/error'/>
    // }
    // else{
        return (
            <main>
                {/* <Navbar /> */}
                        <video autoPlay playsInline loop muted className="individual-hero">
                        <source src={vid} type="video/mp4"/>
                        video not supported
                    </video>
                    <PickTime/>
                <Footer />
            </main>
        )
    // }
}

export default ReserveExpert
