import React from "react";
import styled from "styled-components"

import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <Nav>
            <div className="brand">
                <div className="container">
                    <img src= {logo} alt="" /> 
                    Travelo
                </div>
                <div className="toggle"></div>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Places</a></li>
                <li><a href="">Testimonials</a></li>
            </ul>
            <button>Connect</button>
        </Nav>
    )
}
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand {
        .container {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
            font-size: 1.2rem;
            font-weight: 900;
            text-transform: uppercase; 
        }

        .toggle {
            display: none;
        }
    }

    ul {
        display: flex;
        list-style-type: none;
        gap: 1rem;

        li {
           a {
            text-decoration: none;
            color: #0077b6;
            font-size: 1.2rem;
            transition: 0.1s ease-in-out;
           } 
           a:hover {
               color: #023e8a;
           }
        }
        li:first-of-type {
            a {
                color: #023e8a;
                font-weight: 900;
            }
        }
    }

    button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        color: #fff;
        background-color: #48cae4;
        text-transform: uppercase;
        font-size: 1rem;
        transition: background-color 0.8s ease;
        &:hover {
            background-color: #023e8a;
        }
    }
`
export default Navbar;