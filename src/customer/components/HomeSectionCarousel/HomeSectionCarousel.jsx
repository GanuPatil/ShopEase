import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ data = [], sectionName }) => {
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  // const totalItems = items.length;
  // const maxVisibleItems = responsive[1024].items;

  // const slidePrev = () => {
  //   setActiveIndex((prevIndex) => {
  //     const newIndex = Math.max(prevIndex - 1, 0);
  //     console.log("Moving to previous index:", newIndex); // Debug statement
  //     return newIndex;
  //   });
  // };

  // const slideNext = () => {
  //   setActiveIndex((prevIndex) => {
  //     const newIndex = Math.min(prevIndex + 1, totalItems - maxVisibleItems);
  //     console.log("Moving to next index:", newIndex); // Debug statement
  //     return newIndex;
  //   });
  // };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} key={item.id} />);

  return (
    <div className="px-4 lg:px-8 border">
      <h2 className="text-2xl font-gxtrabold text-gray-800 py-5">
        {" "}
        {sectionName}{" "}
      </h2>{" "}
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />{" "}
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            arialabel="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />{" "}
          </Button>
        )}{" "}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-60%) rotate(90deg)",
              bgcolor: "white",
            }}
            arialabel="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />{" "}
          </Button>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default HomeSectionCarousel;
