import {
  Text,
  Center,
  Spacer,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Box,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { KeyboardEvent, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { ChakraNextImage } from '../components/ChakraNextImage';
import { ProjectBody } from '../components/ProjectBody';
import { ProjectCard } from '../components/ProjectCard';
import { RandomProjectItem } from '../components/RandomProjectItem';
import { projects, randomProjects } from '../data';
import { LinkType } from '../types';

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

export const ProjectsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const handleProjectOpen = (projectIdx: number) => {
    setSelectedProject(projectIdx);
    onOpen();
  };

  const websiteLink =
    projects[selectedProject].links?.find((link) => link.type === LinkType.WEBSITE)?.href || '';
  const otherLink =
    projects[selectedProject].links?.find((link) => link.type === LinkType.GITHUB)?.href || '';

  return (
    <>
      <MotionBox
        variants={fadeInUp}
        initial="from"
        animate="to"
        exit="exit"
        transition={{ delay: 0 }}
      >
        <Text fontWeight="700" fontSize="2xl">
          Projects
        </Text>
        <Text fontWeight="400" fontSize="md" opacity="0.5">
          some made as side projects, some made for hackathons
        </Text>
      </MotionBox>
      <Spacer w="full" h={10} />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 8 }} mb={10}>
        {projects.map((project, idx) => {
          return (
            <MotionBox
              variants={fadeInUp}
              initial="from"
              animate="to"
              exit="exit"
              role="button"
              onClick={() => handleProjectOpen(idx)}
              onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === 'Enter') {
                  handleProjectOpen(idx);
                }
              }}
              key={project.name}
              transition={{ delay: (idx + 1) / 20 }}
              tabIndex="0"
            >
              <ProjectCard project={project} />
            </MotionBox>
          );
        })}
      </SimpleGrid>
      <Spacer w="full" h={8} />
      <MotionBox
        variants={fadeInUp}
        initial="from"
        animate="to"
        exit="exit"
        transition={{ delay: 0.5 }}
      >
        <Text fontWeight="700" fontSize="2xl">
          Games & Experiments
        </Text>
        <Text fontWeight="400" fontSize="md" opacity="0.5">
          games and random thought blurbs made into something useful/useless
        </Text>
      </MotionBox>
      <Spacer w="full" h={10} />
      <VStack alignItems="flex-start" w="full" spacing={4}>
        {randomProjects.map((project, idx) => {
          return (
            <MotionBox
              variants={fadeInUp}
              initial="from"
              animate="to"
              exit="exit"
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              key={project.name}
              transition={{ delay: 0.5 + (idx + 1) / 20 }}
              tabIndex="0"
              w="full"
            >
              <RandomProjectItem project={project} key={project.name} />
            </MotionBox>
          );
        })}
      </VStack>
      <IconButton
        icon={<FiX size="24" />}
        aria-label="modal-close-button, press escape to close too"
        pos="fixed"
        top="20px"
        right="20px"
        size="lg"
        zIndex="1000000000"
        onClick={onClose}
        transition="opacity 0.2s ease-in-out"
        opacity={isOpen ? 0.9 : 0}
        color="commonIconColor"
        pointerEvents={isOpen ? 'unset' : 'none'}
        bg="var(--chakra-colors-bgGradientButton)"
        _hover={{ bg: 'var(--chakra-colors-bgGradientButton)' }}
      ></IconButton>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent bg="dialogBg" position="relative" overflow="hidden" p={3}>
          <ModalHeader p={{ base: 0, md: 3 }}>
            <Link href={websiteLink || otherLink} passHref>
              <a target={websiteLink || otherLink ? '_blank' : ''} rel="noopener noreferrer">
                <HStack spacing={5}>
                  <Box p={3} border="1px solid" borderColor="iconBorderColor" borderRadius="8px">
                    <ChakraNextImage
                      src={projects[selectedProject].image}
                      width="50px"
                      height="50px"
                      quality={100}
                      style={{ zIndex: 2, filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.10))' }}
                    />
                  </Box>
                  <Box>
                    <VStack alignItems="flex-start" spacing={0}>
                      <Text fontWeight="black" fontSize="2xl">
                        {projects[selectedProject].name}
                      </Text>
                      <Text fontWeight="700" fontSize="large" opacity="0.5">
                        {projects[selectedProject].description}
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
              </a>
            </Link>
          </ModalHeader>
          <ModalBody p={{ base: 0, md: 3 }}>
            <Spacer w="full" h={4} />
            <ProjectBody project={projects[selectedProject]} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
