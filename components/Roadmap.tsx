// components/Roadmap.tsx
import { Box, Heading, Text, VStack, HStack, useColorModeValue, Icon, IconButton } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Link as ScrollLink, Element } from 'react-scroll';
import ItemSphere from './ItemSphere'; // Importeer de ItemSphere component

const MotionBox = motion(Box);
const MotionChevronDownIcon = motion(ChevronDownIcon);

const roadmapData = [
  {
    title: 'DISCOVERY',
    subtitle: 'Intake gesprek',
    description: 'Onze reis begint met het leren kennen van elkaar. Samen bespreken we jouw doelen, doelgroep en unieke merkpersoonlijkheid.',
  },
  {
    title: 'RESEARCH',
    subtitle: 'Op onderzoek',
    description: 'Met de inzichten uit ontdekking ga ik dieper in op marktonderzoek en trends in de industrie. Dit zorgt ervoor dat het ontwerp visueel aantrekkelijk is en tegelijkertijd strategisch aansluit bij jouw doelen.',
  },
  {
    title: 'CONCEPTEN',
    subtitle: 'Trial & Error',
    description: 'Met het voltooide onderzoek gaan we over tot het creëren van concepten voor de ideeën. Ik verken verschillende ontwerpen, typografieën, kleuren, afbeeldingen en lay-outopties.',
  },
  {
    title: 'DEVELOPMENT',
    subtitle: 'Vormgeving',
    description: 'Met een duidelijke richting verfijn ik het ontwerp totdat ik een design bereik dat in lijn is met jouw visie. We leggen de focus op details tijdens deze fase.',
  },
  {
    title: 'PRESENTATION',
    subtitle: 'Tevreden klant',
    description: 'Ik presenteer je het verfijnde ontwerp ter definitieve goedkeuring. In deze fase zie je jouw creatieve concepten transformeren tot visuele representaties die jouw merk of project weerspiegelen.',
  },
];

const Roadmap = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showTextBox, setShowTextBox] = useState(false);
  const cardBg = useColorModeValue('gray.100', 'gray.700');
  const cardSelectedBg = useColorModeValue('blue.100', 'blue.700');
  const iconColor = useColorModeValue('blue.500', 'blue.200');
  const textBoxBg = useColorModeValue('white', 'gray.800');

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleToggleTextBox = () => {
    setShowTextBox(!showTextBox);
  };

  return (
    <Box id="roadmap" py={10} px={6} textAlign="center">
      <HStack justify="center" mb={6}>
        <Heading as="h2" size="xl">Roadmap</Heading>
        <IconButton
          aria-label="Toggle text box"
          icon={showTextBox ? <MinusIcon /> : <AddIcon />}
          onClick={handleToggleTextBox}
          ml={4}
        />
      </HStack>
      <AnimatePresence>
        {showTextBox && (
          <MotionBox
            bg={textBoxBg}
            border="2px solid"
            borderColor="blue.500"
            borderRadius="md"
            p={6}
            mb={12}
            maxW="700px"
            mx="auto"
            textAlign="left"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            overflow="hidden"
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="lg">
              Bij Xinudesign begeleid ik, Michaël Redant, jou op een unieke reis van idee tot realisatie. De roadmap is een zorgvuldig uitgestippelde weg die we samen afleggen om jouw doelen te bereiken. Elke stap is ontworpen om ervoor te zorgen dat je project niet alleen visueel verbluffend is, maar ook strategisch doordacht en effectief in het behalen van je bedrijfsdoelen. Van de eerste kennismaking tot de uiteindelijke presentatie, mijn doel is om jouw visie tot leven te brengen op een manier die zowel creatief als resultaatgericht is.
            </Text>
          </MotionBox>
        )}
      </AnimatePresence>
      <VStack spacing={8} align="center">
        {roadmapData.map((step, index) => (
          <Element name={`roadmap-step-${index}`} key={index}>
            <MotionBox
              p={5}
              bg={expandedIndex === index ? cardSelectedBg : cardBg}
              borderRadius="lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              textAlign="left"
              position="relative"
              boxShadow="lg"
              w="300px"
              onClick={() => handleCardClick(index)}
              cursor="pointer"
              style={{ transform: `translateX(${index % 2 === 0 ? '-10%' : '10%'})` }} // Subtle stagger
              m={2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <HStack align="center" spacing={4}>
                <ItemSphere /> {/* Gebruik de ItemSphere component */}
                <VStack align="start" spacing={1}>
                  <Heading as="h3" size="sm">{step.title}</Heading>
                  <Text fontSize="sm" color="gray.500">{step.subtitle}</Text>
                </VStack>
              </HStack>
              <Icon
                as={expandedIndex === index ? ChevronUpIcon : ChevronDownIcon}
                w={6}
                h={6}
                color={iconColor}
                position="absolute"
                right={4}
                top="50%"
                transform="translateY(-50%)"
              />
              <AnimatePresence>
                {expandedIndex === index && (
                  <MotionBox
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    mt={4}
                    overflow="hidden"
                  >
                    <Text fontSize="sm">{step.description}</Text>
                  </MotionBox>
                )}
              </AnimatePresence>
            </MotionBox>
            {index < roadmapData.length - 1 && (
              <ScrollLink to={`roadmap-step-${index + 1}`} smooth={true} duration={500}>
                <MotionChevronDownIcon
                  w={8}
                  h={8}
                  mt={2}
                  mb={2}
                  cursor="pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ color: cardSelectedBg }}
                />
              </ScrollLink>
            )}
          </Element>
        ))}
      </VStack>
    </Box>
  );
};

export default Roadmap;
