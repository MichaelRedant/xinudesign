// components/AboutXinuDesign.tsx
import { Box, Heading, Text, VStack, HStack, Image, useColorModeValue } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import SignatureAnimation from '../public/animations/signature.json';

const AboutXinuDesign = () => {
  const textBoxBg = useColorModeValue('white', 'gray.800');

  return (
    <Box id="about" py={10} px={6} textAlign="center" maxW="800px" mx="auto">
      <Heading as="h2" size="xl" mb={6}>OVER XINUDESIGN</Heading>
      <Box
        bg={textBoxBg}
        border="2px solid"
        borderColor="blue.500"
        borderRadius="md"
        p={6}
        textAlign="left"
      >
        <HStack spacing={4} align="start">
          <Image
            src="/images/michael.jpg" // Voeg de afbeelding van Michaël toe in de map public/images
            alt="Michaël Redant"
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <VStack align="start" spacing={4}>
            <Text>
              Het freelance bedrijf van Michaël Redant.
              Uw toegewijde partner voor grafisch ontwerp, wordpress specialist, Google Ads expert, online en offline marketing. Als zaakvoerder van dit freelance bedrijf ben ik toegewijd aan het leveren van creatieve oplossingen en innovatieve marketingstrategieën om aan uw zakelijke behoeften te voldoen.
            </Text>
            <Text>
              Ik ben vastbesloten om uw zakelijke doelstellingen te realiseren door de kracht van design en marketing te benutten. Samen werken we aan het creëren van een sterke merkidentiteit, boeiende websites en doelgerichte campagnes.
            </Text>
            <Text>
              Bij Xinudesign geloven we in de kracht van creativiteit, toewijding en samenwerking om resultaten te bereiken die opvallen en groei stimuleren.
              Klaar om aan de slag te gaan?
            </Text>
            <Text>
              Laten we een kop koffie drinken en bespreken hoe we uw volgende project tot een groot succes kunnen maken.
            </Text>

            <Text>
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
