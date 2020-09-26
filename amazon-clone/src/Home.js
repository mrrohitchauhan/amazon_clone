import React from "react";
import "./Home.css";
import { Product } from "./Product";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GW_saleToday/P38983965_IN_WLME_SamsungGalaxy_M51_PC_1500x600_2._CB403791124_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id={1}
            title="HP 63 | Ink Cartridge | Black | F6U62AN"
            price={20.8}
            image="https://images-na.ssl-images-amazon.com/images/I/41Q-WavqjiL._AC_US160_.jpg"
            rating={6}
          />
          <Product
            id={2}
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape"
            price={119.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
            price={49.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US160_.jpg"
          />
          <Product
            id={4}
            title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server"
            price={62.64}
            rating={5.5}
            image="https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL._AC_US160_.jpg"
          />
          <Product
            id={5}
            title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
            price={282.24}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US160_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="MSI GL65 Leopard 10SFK-062 15.6 FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB"
            price={(1, 459.83)}
            rating={3.2}
            image="https://m.media-amazon.com/images/I/81ftUqDdYFL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
};
