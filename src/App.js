import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import DigitalRevenue from './components/DigitalRevenue';
import DigitalMarketing from './components/DigitalMarketing';
import GrowthPartner from './components/GrowthPartner';
import Results from './components/Results';
import LearnFromUs from './components/LearnFromUs';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Aos from 'aos';
import { Loader } from './components/iconsvg';
import BackToTop from './assets/images/BackToTop.webp';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000
      }
    );
    Aos.refresh()
  });
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);

  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <>
            <Header />
            <Features />
            <DigitalRevenue />
            <DigitalMarketing />
            <GrowthPartner />
            <Results />
            <LearnFromUs />
            <Footer />
            <div>
              <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "back_to_top" : "d-none"} />
            </div>
          </>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
