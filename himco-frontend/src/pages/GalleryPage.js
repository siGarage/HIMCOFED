import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import cardData from "../components/data/cardData"; // Adjust the path as necessary

const GalleryPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const card = cardData.find((item) => item.id?.toString() === id?.toString());

  if (!card) return <h2 style={{ textAlign: "center" }}>Gallery not found</h2>;

  const images = card.lightboxImages.map((src) => ({ src }));

  return (
    <div
      style={{
        padding: "60px 20px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "45px" }}>{card.title}</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "70px",
          justifyContent: "center",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "280px",
              height: "350px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
            onClick={() => {
              setActiveIndex(index);
              setOpen(true);
            }}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector(".hover-overlay");
              overlay.style.opacity = "1";
              const img = e.currentTarget.querySelector("img");
              img.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector(".hover-overlay");
              overlay.style.opacity = "0";
              const img = e.currentTarget.querySelector("img");
              img.style.transform = "scale(1)";
            }}
          >
            <img
              src={img.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
            <div
              className="hover-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="45"
                  y1="20"
                  x2="45"
                  y2="70"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <line
                  x1="20"
                  y1="45"
                  x2="70"
                  y2="45"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "20px",
          fontSize: "1.1rem",
          marginTop: "30px",
        }}
      >
        {card.description}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={activeIndex}
          slides={images}
        />
      )}
    </div>
  );
};

export default GalleryPage;
