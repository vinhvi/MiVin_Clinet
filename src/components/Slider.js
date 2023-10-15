import React, { useState, useEffect } from "react";

import thum1 from "../assets/images/thumbai_1.png";
import thum2 from "../assets/images/thumbai_2.png";
import thum3 from "../assets/images/thumbai_3.png";

const slides = [
  {
    image: thum1,
    title: "Thu cũ đổi mới",
    text: "Trợ giá đến 5 triệu.",
  },
  {
    image: thum2,
    title: "Máy tính chơi game",
    text: "Máy tính chơi game thế hệ mới, trang bị vi xử lý thế hệ 12.",
  },
  {
    image: thum3,
    title: "Đổi điểm lấy quà",
    text: "Thi bao nhiêu điểm giảm liền bấy nhiêu.",
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const changeSlide = () => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const slideInterval = setInterval(changeSlide, 2000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        borderRadius: "10px",
        boxShadow: "0 7px 29px 0 rgba(100, 100, 111, 0.2)",
        marginBottom: "5px",
        background: "#12486B",
        color: "#eee",
      }}
    >
      <div style={{ width: "69%", height: "45vh", marginRight: "5px" }}>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={index}
                className={index === activeSlide ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeSlide ? "active" : ""
                }`}
                style={{ height: "385px" }}
              >
                <img
                  src={slide.image}
                  className="d-block w-100 object-fit-cover border rounded"
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-caption d-none d-md-block object-fit-fill">
                  <h5 style={{ color: "#fff" }}>{slide.title}</h5>
                  <p style={{ marginTop: "-10px", color: "#eee" }}>
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div style={{ width: "30%" }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            style={{ marginBottom: "5px", borderRadius: "10px" }}
            className="d-block w-100"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
