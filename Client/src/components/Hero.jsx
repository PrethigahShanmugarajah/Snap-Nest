import React from "react";
import { assets, districts } from "../assets/assets";

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen '>
      <p className="bg-[#5EEAD4]/50 px-3.5 py-1 rounded-full mt-20">
        Exclusive Offers and Deals Await You
      </p>
      <h1 className="font-lora text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Your Dream Stay is Just a Click Away
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Book now and enjoy amazing discounts, premium services, and luxurious
        experiences at top-rated hotels worldwide.
      </p>

      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-10 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <i className="bi bi-calendar3 h-4"></i>
            <label htmlFor="destinationInput">Destination</label>
          </div>

          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {districts.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <i className="bi bi-calendar3 h-4"></i>
            <label htmlFor="checkIn">Check in</label>
          </div>

          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <i className="bi bi-calendar3 h-4"></i>
            <label htmlFor="checkOut">Check out</label>
          </div>

          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <i className="bi bi-search h-7"></i>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
