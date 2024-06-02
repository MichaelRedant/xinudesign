// components/SoftwareShowcase.tsx
import { useState } from 'react';
import { Box, SimpleGrid, Button, VStack, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SoftwareAnimation from './SoftwareAnimation';

interface Software {
  name: string;
  logo: string;
  description: string;
}

const softwareData: Software[] = [
  { name: 'Photoshop', logo: '/logos/photoshop.svg', description: 'Adobe Photoshop: Grafisch bewerken en ontwerpen.' },
  { name: 'Illustrator', logo: '/logos/Illustrator.svg', description: 'Adobe Illustrator: Vector illustraties maken.' },
  { name: 'InDesign', logo: '/logos/indesign-cc-logo-svgrepo-com.svg', description: 'Adobe InDesign: Lay-out ontwerpen voor print en digitaal.' },
  { name: 'After Effects', logo: '/logos/after-effects-cc-logo-svgrepo-com.svg', description: 'Adobe After Effects: Bewegende beelden en visuele effecten.' },
  { name: 'Premiere Pro', logo: '/logos/premiere-cc-logo-svgrepo-com.svg', description: 'Adobe Premiere Pro: Videobewerking en montage.' },
  { name: 'Instagram', logo: '/logos/instagram-1-svgrepo-com.svg', description: 'Instagram: Social media platform voor het delen van foto\'s en video\'s.' },
  { name: 'Facebook', logo: '/logos/facebook-color-svgrepo-com.svg', description: 'Facebook: Social media platform voor netwerken en delen van content.' },
  { name: 'Pinterest', logo: '/logos/pinterest-badge-logo-82C89A5E42-seeklogo.com.png', description: 'Pinterest: Social media platform voor het delen van ideeën en inspiratie.' },
  { name: 'WordPress', logo: '/logos/wordpress-color-svgrepo-com.svg', description: 'WordPress: Content management systeem voor het bouwen van websites.' },
  { name: 'Shopify', logo: '/logos/shopify-color-svgrepo-com.svg', description: 'Shopify: E-commerce platform voor online winkels.' },
  { name: 'Wix', logo: '/logos/wix-svgrepo-com.svg', description: 'Wix: Websitebouwer met drag-and-drop functionaliteit.' },
  { name: 'Craft', logo: '/logos/craft-cms-logo-58CE348121-seeklogo.com.png', description: 'Craft CMS: Content management systeem voor maatwerk websites.' },
  { name: 'Squarespace', logo: '/logos/squarespace-logo-B8585B5126-seeklogo.com.png', description: 'Squarespace: Alles-in-één oplossing voor het bouwen van websites.' },
  { name: 'Webflow', logo: '/logos/webflow-logo-B378445467-seeklogo.com.png', description: 'Webflow: Visuele webdesign tool en CMS.' },
  { name: 'HTML5', logo: '/logos/html-5-svgrepo-com.svg', description: 'HTML5: Structureren van web content.' },
  { name: 'CSS3', logo: '/logos/css-3-svgrepo-com.svg', description: 'CSS3: Stijl geven aan web content.' },
  { name: 'Vue.js', logo: '/logos/vue-js-logo-2C42B6690F-seeklogo.com.png', description: 'Vue.js: JavaScript framework voor het bouwen van gebruikersinterfaces.' },
  { name: 'React', logo: '/logos/next-js-logo-60FB9B8D2B-seeklogo.com.png', description: 'React: JavaScript library voor het bouwen van gebruikersinterfaces.' },
  { name: 'Laravel', logo: '/logos/laravel.png', description: 'Laravel: PHP framework voor webontwikkeling.' },
  { name: 'ChatGPT', logo: '/logos/openai-svgrepo-com.svg', description: 'ChatGPT: AI-taalmodel ontwikkeld door OpenAI.' },
  { name: 'Adobe Firefly', logo: '/logos/adobe-firefly-logo-862ACDBCA4-seeklogo.com.png', description: 'Adobe Firefly: AI-gestuurde creatieve tools.' },
];

const SoftwareShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSoftware, setSelectedSoftware] = useState<Software | null>(null);

  const handleSoftwareClick = (software: Software) => {
    if (selectedSoftware === software) {
      setSelectedSoftware(null);
    } else {
      setSelectedSoftware(software);
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box py={10} px={[4, 6, 8]} textAlign="center" maxW="1200px" mx="auto">
      <SoftwareAnimation />
      <Button onClick={toggleOpen} mb={6}>
        {isOpen ? 'Verberg' : 'Toon'} mijn software
      </Button>
      <AnimatePresence>
        {isOpen && (
          <Box
            as={motion.div}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            overflow="hidden"
          >
            <SimpleGrid columns={[3, 4, 6]} spacing={8} justifyItems="center">
              {softwareData.map((software) => (
                <Box
                  key={software.name}
                  as={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSoftwareClick(software)}
                  position="relative"
                  cursor="pointer"
                >
                  <Image src={software.logo} alt={software.name} width={50} height={50} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedSoftware && (
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            mt={6}
            p={4}
            bg="black"
            color="white"
            borderRadius="md"
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            zIndex="1"
            width="100%"
            textAlign="center"
          >
            <Text fontSize="md">{selectedSoftware.description}</Text>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default SoftwareShowcase;
