import React from 'react';
import NavigationBar from './components/Navbar';
import CallToAction from './components/CallToAction';
import WhatsAppButton from './components/WhatsAppButton';
import ImageCarousel from './components/ImageCarousel';
import SubjectIcons from './components/SubjectIcons';
import NebulaBackground from './components/NebulaBackground';

const App = () => {
  return (
    <div>
      <NebulaBackground />
      <NavigationBar />
      <CallToAction />
      <WhatsAppButton />
      <ImageCarousel />
      <SubjectIcons />
    </div>
  )
}

export default App;
