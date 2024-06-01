// pages/index.tsx
import { Box } from '@chakra-ui/react';
import SeoHead from '../components/SeoHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CoreServices from '../components/CoreServices';
import Roadmap from '@/components/Roadmap';
import AboutXinuDesign from '@/components/AboutXinudesign';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <Box>
      <SeoHead title="Xinudesign - Home" description="Minimalistic design and innovation" />
      <Header />
      <Hero />
      <CoreServices />
      <Roadmap />
      <AboutXinuDesign />
      <Footer />
    </Box>
  );
};

export default Home;
