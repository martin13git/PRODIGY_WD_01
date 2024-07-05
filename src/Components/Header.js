import React, { useState, useEffect } from 'react';


export default function Header() {

    const landscapeStyle = {
        color: '#02B55A',
        fontFamily: 'Fantasy',
    };

    const voyageStyle = {
        color: '#F10234',
        fontFamily: 'Fantasy',
    };

    const discoveryStyle = {
        color: '#F3B523',
        fontFamily: 'Fantasy',
    };

    const eyesStyle = {
        color: '#23DAF3',
        fontFamily: 'Fantasy',
    };

    const [fontSize, setFontSize] = useState(33);
    const [authorfontsize, setAuthorfontSize] = useState(18);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [promotxtsize, setPromotxtSize] = useState(10);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            setScrollPosition(scrollPosition);
            const newFontSize = Math.max(18, Math.max(33 - scrollPosition * 0.1, 16));
            setFontSize(newFontSize);
            const newauthorfontSize = newFontSize / 2;
            setAuthorfontSize(newauthorfontSize);
            const newpromoSize = Math.min(56,Math.max(10 + scrollPosition * 0.5, 10));
            setPromotxtSize(newpromoSize);
        };

        const handleScrollUp = () => {
            // Get the scroll position
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Revert font size to normal when scrolled up
            if (scrollPosition === 0) {
                setFontSize(33);
                setAuthorfontSize(18);
                setPromotxtSize(10);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollUp); // Listen for scroll up event

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollUp);
        };
    }, []);


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 5); // Assuming you have 5 images
        }, 3000); // Change slide every 2 second (adjust as needed)

        return () => clearInterval(interval);
    }, []);

    const slideStyle = {
        transform: `translateX(-${currentIndex * 100}%)`, // Move slides horizontally
    };




    return (
        <div className="header">
            <div className="quote-container">
                <div className='quote'>
                    <h2 style={{ fontSize: `${fontSize}px` }}>
                        “The real <span style={voyageStyle}>voyage <i className="fas fa-anchor"></i></span> of <span style={discoveryStyle}>discovery  <i className="fas fa-compass"></i></span> consists not in seeking new <span style={landscapeStyle}>landscapes <i className="fas fa-road"></i> </span>, but in having new <span style={eyesStyle}>eyes  <i className="fas fa-eye"></i></span>.”
                    </h2>
                </div>
                <div className='author' style={{ fontSize: `${authorfontsize}px` }}>
                    <p><i className="fas fa-feather"></i>― Marcel Proust</p>
                </div>
                {scrollPosition > 5 && (
                    <div className='promotxt'>
                        <h2 style={{ fontSize: `${promotxtsize}px` }}>Let's Travel ! <i className="fas fa-plane-departure"></i></h2>
                    </div>
                )}
            </div>
            <div className='headerimg'>
                <div className="slideshow-container">
                    <div className="slideshow" style={slideStyle}>
                        <img src="./image1.jpg" alt="" className="slideshow-img" />
                        <img src="./image2.jpg" alt="" className="slideshow-img" />
                        <img src="./image3.jpg" alt="" className="slideshow-img" />
                        <img src="./image4.jpg" alt="" className="slideshow-img" />
                        <img src="./image5.jpg" alt="" className="slideshow-img" />
                        <img src="./image6.jpg" alt="" className="slideshow-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
