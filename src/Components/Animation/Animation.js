import React from "react";
import "./Animation.scss"; // Import CSS file with animations
import Social from "../SocialSharing/Social";
import IntroItems from "../ContentZone/IntroItems";
import Placeholder from "../ContentZone/Placeholder";

const MyComponent = () => {
  //   const [scrollPosition, setScrollPosition] = useState(0);

  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div
      className="WWeDoSection2 container"
      //   style={{ height: "2000px" }}
    >
      <Placeholder />
      <div className={`ShapeRound1 `} />
      <div className={`ShapeRound2 `} />
      <div className={`ShapeSquare1 `} />
      <div className={`ShapeSquare2 `} />
      <div className={`ShapeSquare3 `} />
      <div className={`ShapeSquare4 `} />
      <div className={`ShapeSquare5 `} />
      <div className={`ShapeSolid1 `} />
      <div className={`ShapeSolid2 `} />

      
    </div>
  );
};

export default MyComponent;
