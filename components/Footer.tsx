// components/Footer.tsx
import { Box, VStack, HStack, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import LinkedInIcon from '../public/animations/linkedin.json';
import InstagramIcon from '../public/animations/instagram.json';
import FacebookIcon from '../public/animations/facebook.json';
import EmailIcon from '../public/animations/email.json';
import PinterestIcon from '../public/animations/pinterest.json';
const Footer = () => {
  const bgColor = useColorModeValue('gray.800', 'gray.900');
  const textColor = useColorModeValue('gray.200', 'gray.400');

  return (
    <Box as="footer" bg={bgColor} color={textColor} py={10} textAlign="center">
      <VStack spacing={6}>
        <Text fontSize="xl" fontWeight="bold">LET&apos;S TALK</Text>
        <HStack spacing={8}>
          <Link href="https://www.linkedin.com" isExternal>
            <Player
              autoplay
              loop
              src={LinkedInIcon}
              style={{ height: '50px', width: '50px' }}
            />
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            <Player
              autoplay
              loop
              src={InstagramIcon}
              style={{ height: '50px', width: '50px' }}
            />
          </Link>
          <Link href="https://www.facebook.com" isExternal>
            <Player
              autoplay
              loop
              src={FacebookIcon}
              style={{ height: '50px', width: '50px' }}
            />
          </Link>
          <Link href="https://www.pinterest.be" isExternal>
            <Player
              autoplay
              loop
              src={PinterestIcon}
              style={{ height: '50px', width: '50px' }}
            />
          </Link>
          <Link href="mailto:michael@xinudesign.be">
            <Player
              autoplay
              loop
              src={EmailIcon}
              style={{ height: '50px', width: '50px' }}
            />
          </Link>
        </HStack>
        <Text>WANT TO 3D PRINT – <Link href="https://x3dprints.be" isExternal>X3DPRINTS.BE</Link></Text>
        <Text>Copyright © 2024 Xinudesign | Designed door Xinudesign</Text>
        <Text>Part of Xinu B.V. | BE0681.759.451</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
