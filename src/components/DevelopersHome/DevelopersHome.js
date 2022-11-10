import "./DevelopersHome.css";
import "./DeveloperCard/DeveloperCard.css";
import devData from "./DeveloperCard/DeveloperCardData.json";
import DeveloperCard from "./DeveloperCard/DeveloperCard";
const DevelopersHome = () => {

    return(
        <div className="developers-home">
            <div className="container">
                <div className="cards-block">
                    <div className="cards-header">Our products</div>
                    <div className="cards">
                        {devData.map(({header,src,text}) => {
                            return (
                                <DeveloperCard header={header} src={src} text={text}/>
                            )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevelopersHome;