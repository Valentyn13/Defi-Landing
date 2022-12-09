import "./HeaderAbout.css";
import headerImg from './../../assets/about-img.webp';
const HeaderAbout = () => {

    return(
        <div className="header-about back-img">
            <div className="container">
                <div className="header-section">
                    <div className="header-section-content">
                        <h1>Contributors</h1>
                        <p className="bold-text">Efficiency in decentralized finance is just 1inch away</p>
                        <p className="text">1inch offers the most innovative solutions in the DeFi space, focusing primarily on security, speed and efficiency.</p>
                    </div>
                    <img className="header-img" src={headerImg} alt="Uuups..." />
                </div>
            </div>
        </div>
    )
}

export default HeaderAbout;