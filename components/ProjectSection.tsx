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
} from '@chakra-ui/react';
import { useState } from 'react';
import { Project } from '../types';
import { ChakraNextImage } from './ChakraNextImage';
import { ProjectCard } from './ProjectCard';

const projects: Project[] = [
  {
    name: 'TeenyTools',
    image: '/images/teenytools.png',
    description: 'All in one tool for designers & developers',
  },
  {
    name: 'Exoplanet Explore',
    image: '/images/exoplanet.png',
    description: 'Interactive Data Visualization of Exoplanets',
  },
  {
    name: 'Yata',
    image: '/images/yata.png',
    description: 'Project Management App based on Hashtags',
  },
  {
    name: 'WatchDog',
    image: '/images/watchdog.png',
    description: 'Firefigher monitoring dashboard',
  },
  {
    name: '...and many more',
    image: '/images/github.png',
    description: 'more experiments 🔬',
  },
];

export const ProjectSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const handleProjectOpen = (projectIdx: number) => {
    setSelectedProject(projectIdx);
    onOpen();
  };

  return (
    <>
      <Center>
        <Text fontWeight="700" fontSize="xl">
          Projects I&apos;ve worked on 🏗️
        </Text>
      </Center>
      <Spacer w="full" h={6} />
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8}>
        {projects.map((project, idx) => {
          return (
            <Box
              onClick={() => {
                handleProjectOpen(idx);
              }}
              key={project.name}
            >
              <ProjectCard project={project} />
            </Box>
          );
        })}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent bg="dialogBg" position="relative" overflow="hidden" p={3}>
          <ModalHeader p={{ base: 0, md: 3 }}>
            <HStack spacing={5}>
              <Box p={3} border="1px solid" borderColor="iconBorderColor" borderRadius="8px">
                <ChakraNextImage
                  src={projects[selectedProject].image}
                  width="50px"
                  height="50px"
                  quality={100}
                  style={{ zIndex: 2, filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.10));' }}
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
          </ModalHeader>
          <ModalBody p={{ base: 0, md: 3 }}>
            <Spacer w="full" h={4} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
