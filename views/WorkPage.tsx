import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Spacer,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { FiArrowDown, FiChevronDown, FiFile } from 'react-icons/fi';

const MotionBox = motion(Box);
const MotionAccordianItem = motion(AccordionItem);

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

const SideLine = () => (
  <Box
    bg="transparent"
    w="1px"
    h="calc(100% - 60px)"
    pos="absolute"
    left="10px"
    top="25px"
    borderLeft="1px dashed var(--chakra-colors-iconBorderColor)"
  ></Box>
);

const ArrowExpand = () => (
  <Box w="10px" h="10px" pos="relative">
    <Box
      _groupHover={{ opacity: 1 }}
      transition="opacity 0.2s ease-in-out"
      opacity={0}
      pos="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
    >
      <FiChevronDown />
    </Box>
    <Box
      bg="contentColor"
      h="4px"
      w="4px"
      _groupHover={{ opacity: 0 }}
      transition="opacity 0.2s ease-in-out"
      opacity={0.3}
      borderRadius="50%"
      pos="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
    ></Box>
  </Box>
);

export const WorkPage = () => {
  return (
    <>
      <MotionBox
        variants={fadeInUp}
        initial="from"
        animate="to"
        exit="exit"
        transition={{ delay: 0 }}
      >
        <HStack justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Text fontWeight="700" fontSize="2xl">
              Work Experience
            </Text>
            <Text fontWeight="400" fontSize="md" opacity="0.5">
              got paid to write code
            </Text>
          </Box>
          <Tooltip label="opens up a drive link, does not download on click :)">
            <Button
              size="sm"
              leftIcon={<FiFile />}
              as="a"
              href="https://drive.google.com/file/d/1aeQrSqX_UNhQQo9CkrfAGRfUYnA1pWUU/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </Tooltip>
        </HStack>
      </MotionBox>
      <Spacer w="full" h={10} />
      <Accordion defaultIndex={[0]} allowMultiple mb={10}>
        <MotionAccordianItem
          variants={fadeInUp}
          initial="from"
          animate="to"
          exit="exit"
          transition={{ delay: 0.1 }}
          border="none"
        >
          <AccordionButton
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            p={0}
            role="group"
          >
            <HStack justifyContent="flex-start" alignItems="center" spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                PushOwl
              </Text>
              <ArrowExpand />
              <Text fontSize="lg" fontWeight="bold">
                Frontend Engineer
              </Text>
            </HStack>
            <Text fontSize="md" fontWeight="bold" opacity="0.5">
              Jul 2023 - Present
            </Text>
          </AccordionButton>
          <AccordionPanel pos="relative">
            <SideLine />
            <Box
              as="ul"
              sx={{
                li: {
                  margin: '8px 0',
                  marginLeft: '30px',

                  '&::marker': {
                    content: '"-  "',
                  },
                },
              }}
            >
              <li>Working on shopify apps, currently neck-deep into the ecosystem</li>
              <li>Managing multiple huge frontend codebases serving millions of clients</li>
            </Box>
          </AccordionPanel>
        </MotionAccordianItem>
        <Spacer w="full" h={6} />
        <MotionAccordianItem
          variants={fadeInUp}
          initial="from"
          animate="to"
          exit="exit"
          transition={{ delay: 0.1 }}
          border="none"
        >
          <AccordionButton
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            p={0}
            role="group"
          >
            <HStack justifyContent="flex-start" alignItems="center" spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                Presidio
              </Text>
              <ArrowExpand />
              <Text fontSize="lg" fontWeight="bold">
                Senior Software Engineer
              </Text>
            </HStack>
            <Text fontSize="md" fontWeight="bold" opacity="0.5">
              Mar 2023 - Jul 2023
            </Text>
          </AccordionButton>
          <AccordionPanel pos="relative">
            <SideLine />
            <Box
              as="ul"
              sx={{
                li: {
                  margin: '8px 0',
                  marginLeft: '30px',

                  '&::marker': {
                    content: '"-  "',
                  },
                },
              }}
            >
              <li>Writing scalable IaC(Infrastructure as Code) in typescript using CDK</li>
              <li>
                Managing complex async dynamic state machines with AWS step functions and building
                an interactive flow visualizer on the frontend
              </li>
            </Box>
          </AccordionPanel>
        </MotionAccordianItem>
        <Spacer w="full" h={6} />
        <MotionAccordianItem
          variants={fadeInUp}
          initial="from"
          animate="to"
          exit="exit"
          transition={{ delay: 0.2 }}
          border="none"
        >
          <AccordionButton
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            p={0}
            role="group"
          >
            <HStack justifyContent="flex-start" alignItems="center" spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                Presidio
              </Text>
              <ArrowExpand />
              <Text fontSize="lg" fontWeight="bold">
                Software Engineer
              </Text>
            </HStack>
            <Text fontSize="md" fontWeight="bold" opacity="0.5">
              Nov 2021 - Present
            </Text>
          </AccordionButton>
          <AccordionPanel pos="relative">
            <SideLine />
            <Box
              as="ul"
              sx={{
                li: {
                  margin: '8px 0',
                  marginLeft: '30px',

                  '&::marker': {
                    content: '"-  "',
                  },
                },
              }}
            >
              <li>
                Worked on a data heavy dashboard to process & display bulky near-realtime data.{' '}
              </li>
              <li>Maintained an abstract design system built on top of MUI</li>
              <li>
                Optimized and resolved performance issues that improved the whole application&apos;s
                UX, wrote a series of blogs on the discovery.
              </li>
              <li>
                Developed in-house dev tools and introduced modern React design patterns which
                greatly improved the developer experience.
              </li>
              <li>
                Wrote scalable AWS Infrastructure with CDK and built microservices with NestJS
              </li>
            </Box>
          </AccordionPanel>
        </MotionAccordianItem>
        <Spacer w="full" h={6} />
        <MotionAccordianItem
          variants={fadeInUp}
          initial="from"
          animate="to"
          exit="exit"
          transition={{ delay: 0.3 }}
          border="none"
        >
          <AccordionButton
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            p={0}
            role="group"
          >
            <HStack justifyContent="flex-start" alignItems="center" spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                Presidio
              </Text>
              <ArrowExpand />
              <Text fontSize="lg" fontWeight="bold">
                Associate Software Engineer
              </Text>
            </HStack>
            <Text fontSize="md" fontWeight="bold" opacity="0.5">
              Aug 2021 - Nov 2021
            </Text>
          </AccordionButton>
          <AccordionPanel pos="relative">
            <SideLine />
            <Box
              as="ul"
              sx={{
                li: {
                  margin: '8px 0',
                  marginLeft: '30px',

                  '&::marker': {
                    content: '"-  "',
                  },
                },
              }}
            >
              <li>Get AWS Certified - Solutions Architect Associate</li>
            </Box>
          </AccordionPanel>
        </MotionAccordianItem>
        <Spacer w="full" h={6} />
        <MotionAccordianItem
          variants={fadeInUp}
          initial="from"
          animate="to"
          exit="exit"
          transition={{ delay: 0.4 }}
          border="none"
        >
          <AccordionButton
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            p={0}
            role="group"
          >
            <HStack justifyContent="flex-start" alignItems="center" spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                Presidio
              </Text>
              <ArrowExpand />
              <Text fontSize="lg" fontWeight="bold">
                Developer Intern
              </Text>
            </HStack>
            <Text fontSize="md" fontWeight="bold" opacity="0.5">
              Jul 2020 - Nov 2021
            </Text>
          </AccordionButton>
          <AccordionPanel pos="relative">
            <SideLine />
            <Box
              as="ul"
              sx={{
                li: {
                  margin: '8px 0',
                  marginLeft: '30px',

                  '&::marker': {
                    content: '"-  "',
                  },
                },
              }}
            >
              <li>
                Worked on a realtime videoconferencing e-commerce webapp utilizing AWS resources,
                optimized the app on mobile & tablet screens
              </li>
              <li>
                Dig deep into angular code to fix frontend performance issues of a WebRTC
                application, which incresed the number of concurrent video participants by 60%
              </li>
            </Box>
          </AccordionPanel>
        </MotionAccordianItem>
      </Accordion>
    </>
  );
};
