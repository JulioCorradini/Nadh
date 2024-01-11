/*import React from 'react';
import NavigationBar from './components/Navbar';
import CallToAction from './components/CallToAction';
import WhatsAppButton from './components/WhatsAppButton';
import ImageCarousel from './components/ImageCarousel';
import SubjectIcons from './components/SubjectIcons';
import NebulaBackground from './components/NebulaBackground';
import Text from './components/Text';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <NebulaBackground />
      <NavigationBar />
      <Text />
      <CallToAction />
      <WhatsAppButton />
      <ImageCarousel />
      <SubjectIcons />
    </div>
  )
}

export default App;*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import NavigationBar from './components/Navbar';
import Image from './components/Image';
import Text from './components/Text';
import CallToAction from './components/CallToAction';
import SubjectIcons from './components/SubjectIcons';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  
  return(
    <div className='app-container'>
      <ParticlesBackground />
      <NavigationBar />
      <Image />
      <Text />
      <CallToAction />
      <SubjectIcons />
      <WhatsAppButton />
      <Footer />
    </div>
  )

};

export default App;
