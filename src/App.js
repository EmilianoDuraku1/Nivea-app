import { useEffect } from "react";
import "./App.scss";
import "./SliderElements.scss";
import "./Grid.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import ProductSelector from "./Components/ProductSelector/ProductSelector";
import Teaser from "./Components/Teaser/Teaser";
import IntroItems from "./Components/ContentZone/IntroItems";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import StandardSlider from "./Components/StandardSlider/StandardSlider";
import SmallTeaser from "./Components/SmallTeaser/SmallTeaser";
import Trust from "./Components/Trust/Trust";
import Social from "./Components/SocialSharing/Social";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Footer/Copyright";
import Banner from "./Components/PromotionBaner/Banner";
import Layer from "./Components/Header/Layer";
import Cookies from "./Components/Cookies/Cookies";
import Search from "./Components/Search/Search";
import Login from "./Components/LoginPage/Login";
import { reveal } from "./helpers";
import Linear from "./Components/LinearText/Linear";
import Animation from "./Components/Animation/Animation";
function App() {
  useEffect(() => {
    var shopCart = document.getElementById("layer");
    var openCart = document.getElementById("shop-cart");
    openCart.onclick = function () {
      shopCart.style.opacity = "1";
      shopCart.style.zIndex = "999";
    };
  }, []);

  window.addEventListener("scroll", reveal);
  return (
    <>
      <div className="big-container">
        <Header />
        <Layer />
        <Search />
        <Login />
        <Banner />
        {/* <Cookies /> */}
        <body>
          <Slider />
          <ProductSelector />
          <Teaser />
          <Linear />
          <Animation />
          <IntroItems />
          <ProductSlider />
          <StandardSlider />
          <SmallTeaser />
          <Trust />
          <Social />
        </body>
        <footer className="footer">
          <Footer />
          <Copyright />
        </footer>
      </div>
    </>
  );
}

export default App;
