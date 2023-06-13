import './navigation.styles.scss'
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Navigation = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [translation, setTranslation] = useState(0);
    const [scrollUpCounter, setScrollUpCounter] = useState(0);

    // Add a scroll event listener to track the scroll position
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;

            if (currentPosition > scrollPosition && currentPosition > 500) {
                setTranslation(-100);
            } else if (currentPosition < scrollPosition) {
                setTranslation(0);
                setScrollUpCounter(prevCounter => prevCounter + 1);
            }

            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const navbarStyle = {
        transform: `translateY(${translation}px)`,
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <>
            <nav style={navbarStyle} className="navbar navbar-expand-lg">
                <a href="#home" className="navbar-brand p-0">
                    <svg width="780" height="512" viewBox="0 0 780 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M671.987 153.178L660.345 164.82L779.349 251.485L671.987 153.178Z" fill="#EDDA96" />
                        <path d="M640.942 189.396L629.301 201.038L748.304 287.704L640.942 189.396Z" fill="#EDDA96" />
                        <path d="M573.679 259.246L562.038 270.888L681.041 357.553L573.679 259.246Z" fill="#EDDA96" />
                        <path d="M607.311 223.028L595.669 234.669L714.673 321.335L607.311 223.028Z" fill="#EDDA96" />
                        <path d="M384.826 153.178L373.184 164.82L492.188 251.485L384.826 153.178Z" fill="#EDDA96" />
                        <path d="M353.782 189.396L342.14 201.038L461.143 287.704L353.782 189.396Z" fill="#EDDA96" />
                        <path d="M286.519 259.246L274.877 270.888L393.881 357.553L286.519 259.246Z" fill="#EDDA96" />
                        <path d="M320.15 223.028L308.508 234.669L427.512 321.335L320.15 223.028Z" fill="#EDDA96" />
                        <path d="M651.959 401.437L640.536 389.58L551.671 506.951L651.959 401.437Z" fill="#EDDA96" />
                        <path d="M616.325 369.724L604.902 357.867L516.037 475.238L616.325 369.724Z" fill="#EDDA96" />
                        <path d="M547.739 301.173L536.316 289.316L447.451 406.687L547.739 301.173Z" fill="#EDDA96" />
                        <path d="M583.325 335.472L571.902 323.616L483.037 440.986L583.325 335.472Z" fill="#EDDA96" />
                        <path d="M651.959 116.863L640.536 105.007L551.671 222.377L651.959 116.863Z" fill="#EDDA96" />
                        <path d="M616.325 85.15L604.902 73.2937L516.037 190.664L616.325 85.15Z" fill="#EDDA96" />
                        <path d="M547.739 16.5989L536.316 4.74265L447.451 122.113L547.739 16.5989Z" fill="#EDDA96" />
                        <path d="M583.325 50.8985L571.902 39.0422L483.037 156.412L583.325 50.8985Z" fill="#EDDA96" />
                        <path d="M344.102 114.276L332.679 102.42L243.814 219.79L344.102 114.276Z" fill="#7D262B" />
                        <path d="M308.468 82.5629L297.045 70.7066L208.18 188.077L308.468 82.5629Z" fill="#7D262B" />
                        <path d="M239.882 14.0119L228.459 2.15562L139.594 119.526L239.882 14.0119Z" fill="#7D262B" />
                        <path d="M275.468 48.3115L264.045 36.4552L175.18 153.825L275.468 48.3115Z" fill="#7D262B" />
                        <path d="M354.45 404.024L343.027 392.167L254.162 509.538L354.45 404.024Z" fill="#7D262B" />
                        <path d="M318.816 372.311L307.393 360.454L218.528 477.825L318.816 372.311Z" fill="#7D262B" />
                        <path d="M250.23 303.76L238.807 291.903L149.942 409.274L250.23 303.76Z" fill="#7D262B" />
                        <path d="M285.816 338.059L274.393 326.203L185.528 443.573L285.816 338.059Z" fill="#7D262B" />
                        <path d="M110.6 158.352L98.9587 169.994L217.962 256.659L110.6 158.352Z" fill="#7D262B" />
                        <path d="M79.556 194.57L67.9143 206.212L186.918 292.878L79.556 194.57Z" fill="#7D262B" />
                        <path d="M12.2931 264.42L0.651428 276.062L119.655 362.728L12.2931 264.42Z" fill="#7D262B" />
                        <path d="M45.9245 228.202L34.2829 239.843L153.286 326.509L45.9245 228.202Z" fill="#7D262B" />
                        <path d="M384.826 148.004L373.184 159.645L492.188 246.311L384.826 148.004Z" fill="#7D262B" />
                        <path d="M353.782 184.222L342.14 195.864L461.143 282.53L353.782 184.222Z" fill="#7D262B" />
                        <path d="M286.519 254.072L274.877 265.714L393.881 352.379L286.519 254.072Z" fill="#7D262B" />
                        <path d="M320.15 217.854L308.508 229.495L427.512 316.161L320.15 217.854Z" fill="#7D262B" />
                        <path d="M482.781 179.048C528.234 260.27 529.357 311.757 498.303 401.533L522.88 420.936C576.622 308.372 584.374 234.208 522.88 92.3826C493.312 106.998 470.122 126.676 423.279 171.287L443.975 201.038L482.781 179.048Z" fill="url(#paint0_linear_3_57)" />
                        <path d="M428.453 216.56L389.647 274.768C368.946 211.741 348.601 181.11 292.634 136.362L304.275 105.318C371.176 138.358 396.822 163.586 428.453 216.56Z" fill="url(#paint1_linear_3_57)" />
                        <path d="M233.132 423.523C200.695 248.262 203.388 170.132 268.057 88.502L288.753 102.731C243.087 224.207 247.738 286.08 300.395 387.304L233.132 423.523Z" fill="url(#paint2_linear_3_57)" />
                        <defs>
                            <linearGradient id="paint0_linear_3_57" x1="586.615" y1="398.946" x2="422.338" y2="400.24" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FCF00E" />
                                <stop offset="1" stop-color="#EEA51B" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_3_57" x1="285.225" y1="274.768" x2="457.263" y2="274.768" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#C75823" />
                                <stop offset="1" stop-color="#EFAD19" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_3_57" x1="201.147" y1="424.816" x2="361.543" y2="424.816" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#921C1E" />
                                <stop offset="1" stop-color="#CA5F22" />
                            </linearGradient>
                        </defs>
                    </svg>

                </a>
                <div className="collapse navbar-collapse navbar-menu" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="#home" className="nav-item nav-link active">ACCUEIL</a>
                        <a href="#about" className="nav-item nav-link">À PROPOS</a>
                        <a href="#service" className="nav-item nav-link">Service</a>
                        <a href="#menu" className="nav-item nav-link">Menu</a>
                        <a href="#contact" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
                <a href="#reserve" className="btn btn-primary main-nav-btn py-2 px-4">Réserver</a>
                <div onClick={menuToggle} className={`ham-menu-toggle ${isMenuOpen ? 'ham-menu-toggle-active' : ''}`} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`mobile-nav-bar ${isMenuOpen ? 'mobile-nav-bar-active' : ''}`}>
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="#home" className="nav-item nav-link active" onClick={menuToggle}>ACCUEIL</a>
                        <a href="#about" className="nav-item nav-link" onClick={menuToggle}>À PROPOS</a>
                        <a href="#service" className="nav-item nav-link" onClick={menuToggle}>SERVICE</a>
                        <a href="#menu" className="nav-item nav-link" onClick={menuToggle}>MENU</a>
                        <a href="#contact" className="nav-item nav-link" onClick={menuToggle}>CONTACT</a>
                    </div>
                    <a href="#reserve" className="btn btn-primary  py-2 px-4" onClick={menuToggle}>Réserver</a>
                </div>
            </nav>
            <Outlet />
        </>
    )

}

export default Navigation;