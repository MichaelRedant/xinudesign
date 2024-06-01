// components/ScrollUpButton.tsx
import { IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <MotionIconButton
      icon={<ChevronUpIcon />}
      position="fixed"
      bottom="40px"
      left="40px"
      size="lg"
      colorScheme="blue"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default ScrollUpButton;
