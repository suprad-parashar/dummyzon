// import { Carousel } from "react-bootstrap";
import { Carousel } from "antd";

function CarouselView(props) {
    return (
        <div className="carousel-view-holder">
            <Carousel autoplay autoplaySpeed={3000} infinite dots fade>
                {props.carousel.map((object, index) => <img src={object.image} alt={"carousel image " + index} className="display-image" onClick={() => props.changeView("view", object.id)}/>)}
            </Carousel>
        </div>
        // <Carousel fade>
        //     {props.carousel.map((object, index) => {
        //         return (
        //             <Carousel.Item>
        //                 <img src={object.image} alt={"carousel image " + index} className="display-image"/>
        //                 <Carousel.Caption>
        //                     <h3>{object.title}</h3>
        //                     <p>{object.description}</p>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //         )
        //     })}
        // </Carousel>
    );
}

export default CarouselView;