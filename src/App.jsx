import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import Testimonial from './Testimonial';
import FeatureSection from './FeatureSection';
import BasicFeature from './BasicFeature';
import ActionSection from './ActionSection';
import AppBadge from './AppBadge';
import Footer from './Footer';
import FeedbackModal from './FeedbackModal';

import './css/styles.css'

const App = () => {
  return (
    <>
    <NavBar />
    <HeroSection />
    <Testimonial />
    <FeatureSection />
    <BasicFeature />
    <ActionSection />
    <AppBadge />
    <Footer />
    <FeedbackModal />
    </>
  )
}

export default App