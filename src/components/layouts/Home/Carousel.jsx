import React from "react";
import bannerImg from "../../../Assets/pizzaimg.jpeg";
import Image from "next/image";
function CarouselComponent() {
  return (
    <div className="object-center brightness-100 w-auto h-[70%]">
      <Image src={bannerImg} className="h-[90vh] w-full" alt="pizza" />
    </div>
  );
}

export default CarouselComponent;
