import React from 'react';
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

export default App;
