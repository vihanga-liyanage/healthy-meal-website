import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './HeroElements';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={ toggle }/>
            <Sidebar isOpen={ isOpen} toggle={ toggle }/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>healthy meals just for you</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Order Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
