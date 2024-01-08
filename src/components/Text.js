import React, { useState, useEffect } from "react";
import './Text.css';
//<p className="text-content">CLASES PARTICULARES</p>
const texts = ["CLASES PARTICULARES", "NUEVOS CURSOS", "TUTORÍAS PERSONALIZADAS"];
const delayBetweenTexts = 3000;

const Text = () => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(()=>{

        const fadeInTimeout = setTimeout(() => {
            setIsFadingOut(true);
        }, delayBetweenTexts / 2);

        const fadeOutTimeout = setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setIsFadingOut(false);
        }, delayBetweenTexts);

        return () => {
            clearTimeout(fadeInTimeout);
            clearTimeout(fadeOutTimeout);
        };

    }, [currentTextIndex]);

    return (
        <div className="text-container">
            <p className={`text-content ${isFadingOut ? 'fade-out' : 'fade-in'}`}>{texts[currentTextIndex]}</p>        
        </div>
    );
}

export default Text;