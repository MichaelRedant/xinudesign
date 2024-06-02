// components/AboutXinuDesign.tsx
import { Box, Heading, Text, VStack, HStack, Image, useColorModeValue, keyframes } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import SignatureAnimation from '../public/animations/signature.json';

const AboutXinuDesign = () => {
  const textBoxBg = useColorModeValue('white', 'gray.800');

  const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `;

  const miniAnimation = `${fadeIn} 1s ease-in-out`;

  return (
    <Box id="about" py={10} px={6} textAlign="center" maxW="800px" mx="auto">
      <Heading as="h2" size="xl" mb={6} animation={miniAnimation}>OVER XINUDESIGN</Heading>
      <Box
        bg={textBoxBg}
        border="2px solid"
        borderColor="blue.500"
        borderRadius="md"
        p={6}
        textAlign="left"
        animation={miniAnimation}
      >
        <HStack spacing={4} align="start">
          <Image
            src="/images/michael.jpg" // Voeg de afbeelding van Michaël toe in de map public/images
            alt="Michaël Redant"
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
            animation={miniAnimation}
          />
          <VStack align="start" spacing={4}>
            <Text animation={miniAnimation}>
              Xinudesign is het freelance bedrijf van Michaël Redant. Ik ben uw toegewijde partner voor grafisch ontwerp, WordPress-specialisatie, Google Ads-expertise, en zowel online als offline marketing. Als zaakvoerder van Xinudesign streef ik ernaar om creatieve oplossingen en innovatieve marketingstrategieën te leveren die perfect aansluiten bij uw zakelijke behoeften.
            </Text>
            <Text animation={miniAnimation}>
              Mijn doel is om uw zakelijke doelstellingen te realiseren door de kracht van design en marketing optimaal te benutten. Samen werken we aan het opbouwen van een sterke merkidentiteit, het ontwikkelen van boeiende websites en het opzetten van doelgerichte campagnes.
            </Text>
            <Text animation={miniAnimation}>
              Bij Xinudesign geloven we in de kracht van creativiteit, toewijding en samenwerking. We streven ernaar resultaten te behalen die niet alleen opvallen, maar ook uw groei stimuleren. Bent u klaar om aan de slag te gaan?
            </Text>
            <Text animation={miniAnimation}>
              Laten we samen een kop koffie drinken en bespreken hoe we uw volgende project tot een groot succes kunnen maken.
            </Text>
            <Text animation={miniAnimation}>
                       <Image
            src="/images/Handtekening.webp" // Voeg de afbeelding van Michaël toe in de map public/images
            alt="signature"
            style={{ height: '100%', width: '200px' }}
            objectFit="cover"
          />
   
              Michaël Redant
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default AboutXinuDesign;
