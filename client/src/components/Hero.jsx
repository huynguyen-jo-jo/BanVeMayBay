import React from "react";
import styled from "styled-components"

import homeImage from '../assets/hero.png';

const Hero = () => {
    return (
        <Section id='hero'>
            <div className="background">
                <img src={homeImage} alt="" />
            </div>
            <div className="content">
                <div className="title">
                    <h1>TRAVEL TO EXPLORE</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Nostrum quo fugiat dolore ipsum ipsa tempore ut molestiae, 
                        modi qui laborum molestias! Nihil aliquid, magni autem iure doloribus placeat pariatur itaque?
                    </p>
                </div>
                <div className="search">
                    <div className="container">
                        <label htmlFor="">Where you want to go</label>
                        <input type="text" placeholder="Search your location" name="" id="" />
                    </div>
                    <div className="container">
                        <label htmlFor="">Check in</label>
                        <input type="date" placeholder="" name="" id="" />
                    </div>
                    <div className="container">
                        <label htmlFor="">Check out</label>
                        <input type="date" placeholder="" name="" id="" />
                    </div>
                    <button>
                        Explore Now
                    </button>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 100%;

    .background {
        height: 100%;

        img {
            width: 100%;
            filter: brightness(60%);
        }
    }

    .content {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 99;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export default Hero;