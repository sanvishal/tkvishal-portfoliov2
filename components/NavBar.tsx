import { Box, Flex, HStack, Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FiGift, FiMoon, FiSun } from 'react-icons/fi';
import { getNewPalette, setGeneratedColors } from '../utils/utils';

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const palette = getNewPalette();
    setGeneratedColors(palette);
  }, []);

  const onColorThemeChange = () => {
    const palette = getNewPalette();
    setGeneratedColors(palette);
  };

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" py={3} color="white">
      <Box>💫</Box>
      <HStack>
        <motion.div
          whileTap={{ scale: 0.7, rotate: 420 }}
          transition={{ ease: 'easeInOut', duration: 0.2 }}
        >
          <IconButton
            aria-label="Toggle Mode"
            onClick={toggleColorMode}
            bgColor="transparent"
            _hover={{ bgColor: 'transparent' }}
            _focus={{ bgColor: 'transparent' }}
          >
            <Icon
              as={colorMode === 'light' ? FiMoon : FiSun}
              color={colorMode === 'light' ? '#333333' : '#ffffff'}
              strokeWidth={2.5}
            />
          </IconButton>
        </motion.div>
        <motion.div
          whileTap={{ scale: 1.2 }}
          transition={{ ease: 'easeInOut', duration: 0.2 }}
          style={{ position: 'relative' }}
        >
          <IconButton
            icon={
              <Icon
                as={FiGift}
                color={colorMode === 'light' ? '#333333' : '#ffffff'}
                strokeWidth={2.5}
              />
            }
            aria-label="Toggle Color Theme"
            onClick={onColorThemeChange}
            bg="var(--chakra-colors-bgGradientButton)"
            _hover={{ background: 'var(--chakra-colors-bgGradientButton)' }}
            _focus={{ background: 'var(--chakra-colors-bgGradientButton)' }}
          />
        </motion.div>
      </HStack>
    </Flex>
  );
};
