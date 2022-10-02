import { Spacer, Box, Center, Text, BoxProps } from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ChakraNextImage } from '../components/ChakraNextImage';
import { FancyLink } from '../components/FancyLink';
import { Socials } from '../components/Socials/Socials';
import { Waves } from '../components/Waves';

const MotionBox = motion(Box);

const fadeInUp: Variants = {
  from: {
    opacity: 0,
    y: 5,
  },
  to: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.15 } },
};

export const HomePage = () => {
  return (
    <>
      <MotionBox
        variants={fadeInUp}
        initial="from"
        animate="to"
        exit="exit"
        transition={{ delay: 0 }}
      >
        <Socials />
      </MotionBox>
      <MotionBox
        variants={fadeInUp}
        initial="from"
        animate="to"
        exit="exit"
        transition={{ delay: 0.05 }}
      >
        <ChakraNextImage
          src="/images/tk.png"
          width={100}
          height={100}
          quality={100}
          layout="responsive"
          showBlur={false}
        />
      </MotionBox>
      <Spacer w="full" h={10} />
      <MotionBox
        variants={fadeInUp}
        initial="from"
        animate="to"
        exit="exit"
        transition={{ delay: 0.1 }}
      >
        <Text fontWeight="black" fontSize="2xl">
          Vishal <span className="gradiant-text">TK</span>
        </Text>
        <Text fontSize="lg" mt={2}>
          Software Engineer @ <FancyLink href="https://www.presidio.com/">Presidio</FancyLink>, in
          love with crafting meaningful ideas and intefaces with design, code and art
        </Text>
      </MotionBox>
      <MotionBox
        variants={fadeInUp}
        initial="from"
        animate="to"
        exit="exit"
        transition={{ delay: 0.2 }}
      >
        <Box mt={8}>
          <Waves fill="grey" opacity="0.27" />
        </Box>
        <Spacer w="full" h={8} />
        <Text fontWeight="700" lineHeight="1.8" fontSize={{ base: 'md', md: 'lg' }}>
          Building beautiful and performant applications with rich UI/UX design, highly devoted to
          the tiniest details, polish and craft in my work from backend to frontend till people ends
          ~
        </Text>
        <Spacer w="full" h={14} />
      </MotionBox>
    </>
  );
};
