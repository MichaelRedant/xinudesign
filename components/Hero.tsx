// components/Hero.tsx
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link as ScrollLink } from 'react-scroll';
import scrollDownAnimation from '../public/animations/scroll-down.json';

const Hero = () => {
  return (
    <Box as="section" height="100vh" display="flex" alignItems="center" justifyContent="center" bg="white">
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="4xl" color="smokyBlack">XINUDESIGN</Heading>
        <Text fontSize="2xl" color="dimGray">van idee tot realisatie</Text>
        <ScrollLink to="core-services" smooth={true} duration={500}>
          <Button colorScheme="moonstone" size="lg">Start Nu</Button>
        </ScrollLink>
        <ScrollLink to="core-services" smooth={true} duration={500}>
          <Player
            autoplay
            loop
            src={scrollDownAnimation}
            style={{ height: '100px', width: '100px', marginTop: '20px', cursor: 'pointer' }}
          />
        </ScrollLink>
      </VStack>
    </Box>
  );
};

export default Hero;
