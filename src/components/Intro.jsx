import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg"; // Import the logo image
import lightBulb from "../assets/logo.svg"; // Import the light bulb image
import './Intro.css'; // Ensure you have the CSS styles for the intro

const Intro = () => {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false); // State to control fade-out

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // Trigger fade-out before navigating
            setTimeout(() => {
                navigate('/'); // Navigate to homepage after fade-out
            }, 500); // Wait for fade-out animation to complete
        }, 4500); // Start fade-out before navigating (after the animations)

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`}>
            <div className="light-bulb-container">
                <img src={lightBulb} alt="Light Bulb" className="light-bulb" />
            </div>
            <h1 className={`intro-big-welcome reveal ${fadeOut ? 'fade-out' : ''}`}>Welcome</h1>
            <img src={logo} alt="Logo" className={`intro-logo reveal ${fadeOut ? 'fade-out' : ''}`} />
            <h1 className={`intro-title reveal ${fadeOut ? 'fade-out' : ''}`}>Codeteria</h1>
            <p className={`intro-subtitle reveal ${fadeOut ? 'fade-out' : ''}`}>Your journey to knowledge begins here</p>
        </div>
    );
};

export default Intro;
