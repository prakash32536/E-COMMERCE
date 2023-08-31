import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import the Carousel component from react-bootstrap
import StaticBaner1 from '../image/StaticBaner1.png';

const CarouselComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', maxHeight: '42vh' }}>
      <Carousel style={{ width: '99%', maxHeight: '42vh' }}>
        <Carousel.Item style={{ maxHeight: '42vh', borderRadius: '30px' }}>
          <img
            className="d-block w-100"
            src={StaticBaner1}
            alt="First slide"
            style={{ maxHeight: '270px' }}
          />
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: '42vh' }}>
          <img
            className="d-block w-100"
            src={StaticBaner1}
            alt="Second slide"
            style={{ maxHeight: '270px' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
