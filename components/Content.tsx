import { Box, Container, Spacer } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { GradiantBg } from './GradiantBg';
import { GrainyTexture } from './GrainyTexture';
import { NavBar } from './NavBar';
import { Socials } from './Socials/Socials';

const fadeIn: Variants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.15 } },
};

const MotionBox = motion(Box);
export const Content = ({
  showFooter = false,
  children,
}: PropsWithChildren<{ showFooter?: boolean }>) => {
  return (
    <Container maxW="3xl" px={3}>
      <Box as="main" width="full" minH="100vh" display="flex" flexDir="column">
        <Box>
          <NavBar />
          <Spacer w="full" h={{ md: 32, base: 10 }} />
          {children}
        </Box>
        <GrainyTexture />
        <GradiantBg />
      </Box>
      {showFooter && (
        <MotionBox
          variants={fadeIn}
          initial="from"
          animate="to"
          exit="exit"
          transition={{ delay: 0.3 }}
        >
          <Socials isMobile />
        </MotionBox>
      )}
    </Container>
  );
};
