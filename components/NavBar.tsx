import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiGift, FiHome, FiMoon, FiStar, FiSun } from 'react-icons/fi';
import { usePalette } from '../contexts/PaletteContext';
import { Socials } from './Socials/Socials';

export const HeaderIcons = () => {
  const router = useRouter();
  const [selectedIconIdx, setSelectedIconIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const paths = {
    HOME: '/',
    PROJECTS: '/projects',
  };

  const handleHover = (idx: number) => {
    setSelectedIconIdx(idx);
    setIsHovered(true);
  };

  return (
    <HStack pos="relative">
      <Box
        pos="absolute"
        hidden={!router.isReady}
        w="40px"
        h="40px"
        borderRadius={10}
        bg={'var(--chakra-colors-bgGradientButton)'}
        opacity={isHovered ? 0.3 : 0}
        transition="all 0.2s ease-in-out"
        left={`${40 * selectedIconIdx + 8 * (selectedIconIdx + 1)}px`}
      ></Box>
      <Tooltip label="home">
        <Box>
          <Link href="/">
            <IconButton
              onMouseEnter={() => handleHover(0)}
              onMouseLeave={() => setIsHovered(false)}
              as="a"
              aria-label="goto home"
              cursor="pointer"
              icon={<FiHome style={{ width: '20px' }} />}
              transition="all 0.4s ease-in-out"
              borderRadius={10}
              color="commonIconColor"
              opacity="1"
              bg={
                router.pathname === paths.HOME
                  ? 'var(--chakra-colors-bgGradientButton)'
                  : 'transparent'
              }
              _hover={{
                background:
                  router.pathname === paths.HOME
                    ? 'var(--chakra-colors-bgGradientButton)'
                    : 'transparent',
              }}
              size="md"
            ></IconButton>
          </Link>
        </Box>
      </Tooltip>
      <Tooltip label="projects">
        <Box>
          <Link href="/projects">
            <IconButton
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => setIsHovered(false)}
              as="a"
              aria-label="goto projects"
              cursor="pointer"
              icon={<FiStar style={{ width: '20px' }} />}
              transition="all 0.4s ease-in-out"
              borderRadius={10}
              color="commonIconColor"
              opacity="1"
              bg={
                router.pathname === paths.PROJECTS
                  ? 'var(--chakra-colors-bgGradientButton)'
                  : 'transparent'
              }
              _hover={{
                background:
                  router.pathname === paths.PROJECTS
                    ? 'var(--chakra-colors-bgGradientButton)'
                    : 'transparent',
              }}
              size="md"
            ></IconButton>
          </Link>
        </Box>
      </Tooltip>
    </HStack>
  );
};

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { changePalette } = usePalette();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" py={3} color="white">
      <HStack>
        <HeaderIcons />
      </HStack>
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
            aria-label="Change Color Theme"
            onClick={changePalette}
            bg="transparent"
            _hover={{ background: 'transparent' }}
            _focus={{ background: 'transparent' }}
          />
        </motion.div>
      </HStack>
    </Flex>
  );
};
