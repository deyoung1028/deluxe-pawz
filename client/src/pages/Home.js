import './App.css';
import { Carousel } from 'react-bootstrap'
import deluxepawz_home from '../style/images/deluxepawz_home.png'
import dpMilo from '../style/images/dpMilo.png'
import dplady from '../style/images/dplady.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/images/css/home.css'



function App() {
  return (
    <div className = 'carouselContainer'>
      <div className = 'homeCarousel'>
        <Carousel fade>
          <Carousel.Item>
          <Carousel.Caption>
              <h2 className ='homeLabel'>Welcome to Deluxe Pawz!</h2>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src={deluxepawz_home}
              alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={dpMilo} 
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2 className ='homeLabel'>We Pamper Your Pet!</h2>
              <p className = 'homecaption'>Luxury grooming services right in your driveway!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={dplady} 
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className ='homeLabel'>Luxury Grooming in your DriveWay!</h2>
              <p className = 'homecaption'>Convienent, Safe, Professional</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    </div>
  );
}

export default App;
