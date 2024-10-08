import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["pizza", "burger", "milkshake"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageProp.map((image, index) => {
        return (
          <div
            key={index}
            className="object-center brightness-100 w-auto h-[90vh]"
          >
            <img
              // src={`https://source.unsplash.com/random/900x600/?${image}`}
              src={
                "https://imgs.search.brave.com/W-yB3BKMfdY_ZNHTx7e-LkyGySgVN3Rudg37fQVJs04/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNjYy/ODE1NzUvc3RvY2st/cGhvdG8taGFtLXBp/enph.jpeg"
              }
              alt="pizza"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
