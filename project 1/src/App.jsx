import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroSection from './Component/Hero';
import Navigation from './Component/Navigation';
import './App.css'

function App() {
 

  return (
    <>
      <Navigation />
      <HeroSection />
    </>
  );
}

export default App
