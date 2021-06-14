import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { 
    homeObjOne, 
    homeObjTru, 
    homeObjThree,
    homeObjFour
} from '../components/InfoSection/Data';

const Home = () => {
    //MODAL MOBILE
    const [isOpen, setIsOpen] = useState(false);
    const  toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTru}/>
            <InfoSection {...homeObjThree}/>
            <Services/>
            <InfoSection {...homeObjFour} />
            <Footer/>
        </>
    );
};

export default Home;
