import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Highlights.css';

function Highlights() {
    return (
        <Carousel autoPlay={true} dynamicHeight={false} infiniteLoop={true} interval={6000} showArrows={true} showIndicators={false} showThumbs={false} showStatus={false}>
            <div>
                <img src={require("../Assets/OBBanner.png")} alt="A wooded scene."/>
            </div>
            <div>
                <img src={require("../Assets/WorkPic.png")} alt="The artist."/>
            </div>
        </Carousel>
    );
}

export default Highlights;