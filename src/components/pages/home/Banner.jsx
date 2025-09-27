import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full h-[400px] md:h-[550px]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            className="w-full object-cover"
            alt="Delicious Food"
          />
          <div className="absolute flex items-center h-full bg-black bg-opacity-40 w-full px-10">
            <div className="text-white space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Fresh & Delicious Food
              </h2>
              <p className="text-lg">
                Order your favorite meals and get them delivered to your
                doorstep.
              </p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
                Order Now
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            className="w-full object-cover"
            alt="Burger"
          />
          <div className="absolute flex items-center h-full bg-black bg-opacity-40 w-full px-10">
            <div className="text-white space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Tasty Burgers & Snacks
              </h2>
              <p className="text-lg">
                Grab your favorite fast food with just one click.
              </p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
                Explore Menu
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1606756790138-9b5ecdf5d3d2"
            className="w-full object-cover"
            alt="Pizza"
          />
          <div className="absolute flex items-center h-full bg-black bg-opacity-40 w-full px-10">
            <div className="text-white space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Hot & Cheesy Pizza
              </h2>
              <p className="text-lg">
                Experience the best pizza in town, baked fresh for you.
              </p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
                Get Started
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
