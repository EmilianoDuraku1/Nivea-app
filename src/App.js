import { useEffect } from "react";
import "./App.scss";
import "./SliderElements.scss";
import "./Grid.scss";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import ProductSelector from "./ProductSelector/ProductSelector";
import Teaser from "./Teaser/Teaser";
import IntroItems from "./ContentZone/IntroItems";
import Placeholder from "./ContentZone/Placeholder";
import TextZone from "./ContentZone/TextZone";
import ProductSlider from "./ProductSlider/ProductSlider";
import StandardSlider from "./StandardSlider/StandardSlider";
import SmallTeaser from "./SmallTeaser/SmallTeaser";
import Trust from "./Trust/Trust";
import Social from "./SocialSharing/Social";
import Footer from "./Footer/Footer";
import Copyright from "./Footer/Copyright";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./PromotionBaner/Banner";
import Layer from "./Header/Layer";
import Cookies from "./Cookies/Cookies";
import Search from "./Search/Search";
import Login from "./LoginPage/Login";

function App() {
  useEffect(() => {
    var shopCart = document.getElementById("layer");
    var openCart = document.getElementById("shop-cart");
    openCart.onclick = function () {
      shopCart.style.opacity = "1";
      shopCart.style.zIndex = "999";
    };
  }, []);

  return (
    <>
      <div className="big-container">
        <Header />
        <Layer />
        <Search />

        <Login />
        <Banner />
        <Cookies />
        <body>
          <Slider />

          <ProductSelector />

          <Teaser />
          <section>
            <div className="content-wrapper">
              <IntroItems />
              <Placeholder />
              <TextZone />
            </div>
          </section>
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
