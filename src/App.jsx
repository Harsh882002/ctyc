import React, { useEffect } from 'react';
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Journey from "./components/Journey"
// import Competition from "./components/Competition"
import Registration from "./components/Registration"
import Gallery from "./components/Gallery"
import FullGallery from "./components/FullGallery"
import Contact from "./components/Contact"
import Sponsers from "./components/Sponsers"
import Footer from "./components/Footer"
import Popup from "./components/Popup"
import "./App.css"

function App() {
  const [currentView, setCurrentView] = React.useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Optional: remove 'active' when not intersecting, or keep it if it's a one-time reveal
          // entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.1 // Adjust as needed for when the element should be considered "intersecting"
    });

    const revealElements = document.querySelectorAll(".reveal, .reveal-stagger");
    revealElements.forEach(el => observer.observe(el));

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and cleans up on unmount

  return (
    <div className="App">
      <Popup />
      <Header setView={setCurrentView} currentView={currentView} />

      {currentView === 'home' ? (
        <>
          <Hero />
          <About />
          <Journey />
          {/* <Competition /> */}
          <Registration />
          <Gallery setView={setCurrentView} />
          <Sponsers />
          <Contact />
        </>
      ) : (
        <FullGallery setView={setCurrentView} />
      )}

      <Footer />
    </div>
  )
}

export default App
