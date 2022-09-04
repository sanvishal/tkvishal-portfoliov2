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
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { ChakraNextImage } from '../components/ChakraNextImage';
import { ProjectBody } from '../components/ProjectBody';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data';

export const ProjectsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const handleProjectOpen = (projectIdx: number) => {
    setSelectedProject(projectIdx);
    onOpen();
  };

  return (
    <>
      <Text fontWeight="700" fontSize="2xl">
        Projects
      </Text>
      <Text fontWeight="400" fontSize="md" opacity="0.5">
        some made as side projects, some made for hackathons
      </Text>
      <Spacer w="full" h={10} />
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8}>
        {projects.map((project, idx) => {
          return (
            <Box onClick={() => handleProjectOpen(idx)} key={project.name}>
              <ProjectCard project={project} />
            </Box>
          );
        })}
      </SimpleGrid>
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
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? 'unset' : 'none'}
      ></IconButton>
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
