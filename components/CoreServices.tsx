// components/CoreServices.tsx
import { Box, Heading, VStack, HStack, Text, useColorModeValue, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Player } from '@lottiefiles/react-lottie-player';
import serviceHighlightAnimation from '../public/animations/service-highlight.json'; // Zorg ervoor dat dit pad correct is

const MotionBox = motion(Box);

const coreServices = {
  Marketeer: [
    'SEO',
    'SEM',
    'Google Campaigns',
    'Meta Campaigns',
    'Linkedin Campaigns',
    'Pinterest Campaigns',
    'Visual Branding',
    'Online Marketing',
    'Social Media',
  ],
  Webdeveloper: [
    'Wireframing',
    'Prototyping',
    'UI/UX',
    'HTML',
    'CSS',
    'Vue.js',
    'Next.js',
    'Laravel',
    'WordPress',
    'Shopify',
    'Wix',
    'Craft',
  ],
  Designer: [
    'Brand Identity',
    'Visual Design',
    'Storytelling',
    'Pitch Decks',
    'Logo Design',
    'Grafisch Ontwerp',
    'Flyer Ontwerp',
  ],
};

type CoreServiceKeys = keyof typeof coreServices;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientLine = styled.hr`
  width: 30vw;
  height: 8px;
  border-radius: 4px;
  margin: 2rem auto 2rem auto; // Aanpassing van de marges
  background: linear-gradient(90deg, #ff0080, #7928ca, #0070f3);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 3s linear infinite;
`;

const CoreServices = () => {
  const [selectedService, setSelectedService] = useState<CoreServiceKeys | null>(null);
  const cardBg = useColorModeValue('gray.100', 'gray.700');
  const cardSelectedBg = useColorModeValue('blue.100', 'blue.700');
  const iconColor = useColorModeValue('blue.500', 'blue.200');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleServiceClick = (service: CoreServiceKeys) => {
    setSelectedService(selectedService === service ? null : service);
  };

  return (
    <Box id="core-services" py={10} px={6} textAlign="center">
      <GradientLine ref={ref} style={{ animationPlayState: inView ? 'running' : 'paused' }} />
      <Player
        autoplay
        loop
        src={serviceHighlightAnimation}
        style={{ height: '200px', width: '200px', margin: '0 auto', marginBottom: '2rem' }}
      />
      <HStack spacing={8} justify="center" wrap="wrap">
        {Object.keys(coreServices).map((service) => (
          <MotionBox
            key={service}
            p={5}
            bg={selectedService === service ? cardSelectedBg : cardBg}
            borderRadius="lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleServiceClick(service as CoreServiceKeys)}
            cursor="pointer"
            maxW="350px" // Adjusted width
            textAlign="center"
            position="relative"
            m={4} // Add margin for spacing
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Heading as="h3" size="md" mb={2}>{service}</Heading>
            <Icon as={selectedService === service ? ChevronUpIcon : ChevronDownIcon} w={6} h={6} color={iconColor} />
            {selectedService === service && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <VStack spacing={2} align="center">
                  {coreServices[service as CoreServiceKeys].map((item) => (
                    <Box
                      key={item}
                      p={2}
                      bg="white"
                      borderRadius="md"
                      boxShadow="md"
                      w="full"
                    >
                      <Text>{item}</Text>
                    </Box>
                  ))}
                </VStack>
              </motion.div>
            )}
          </MotionBox>
        ))}
      </HStack>
    </Box>
  );
};

export default CoreServices;
