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
import { LinkType, Project } from '../types';
import { ChakraNextImage } from './ChakraNextImage';
import { ProjectBody } from './ProjectBody';
import { ProjectCard } from './ProjectCard';

const projects: Project[] = [
  {
    name: 'TeenyTools',
    image: '/images/teenytools.png',
    description: 'All in one tool for designers & developers',
    accentColor: '#E27055',
    about: [
      'A quick, all-in-one toolbox of small tools for designers and designers who code. teenytools has many frequently used tools by developers every day, it provides both the ease of access on commonly used tools and a depth of customizations on those tools too.',
      `I use small websites like coolors, blobmaker, and other small tools literally every single day to do repetitive tasks like making color palettes, creating graphics, and other design-related tasks. I even have them bookmarked for easier access. BUT still, I don't like switching tabs among 20 other tabs that I have open already. on the other hand, I LOVE the UX of Raycast, which allows me to navigate anywhere or execute a small script with just simple commands.`,
      "I wanted an app that does all this in a single tab, that is fast and easy to access, that's how teenytools was born",
      'teenytools is built with CRA, ChakraUI, Framer motion and a ton of research on colors and color spaces',
    ],
    images: [
      { link: '/images/teenytools/tt-1.gif', alt: 'A gif of teenytools functionalities' },
      {
        link: '/images/teenytools/tt-3.png',
        alt: 'An image showing teenytools powerful color editor or explorer',
      },
      { link: '/images/teenytools/tt-2.gif', alt: 'A gif showing teenytools command palette' },
      {
        link: '/images/teenytools/tt-4.gif',
        alt: 'A gif showing teenytools quick actions from command palette',
      },
      {
        link: '/images/teenytools/tt-5.png',
        alt: 'An image showing teenytools generative functionality to generate organic patterns',
      },
    ],
    links: [
      {
        type: LinkType.WEBSITE,
        name: 'Visit TeenyTools',
        href: 'https://teenytools.netlify.app/',
      },
      {
        type: LinkType.GITHUB,
        name: 'View Source',
        href: 'https://github.com/sanvishal/teenytools',
      },
      {
        type: LinkType.BLOG,
        name: 'Read About it',
        href: 'https://vishaltk.hashnode.dev/teenytools-a-quick-all-in-one-toolbox-of-small-tools-for-designers-and-designers-who-code',
      },
    ],
  },
  {
    name: 'Exoplanet Explore',
    image: '/images/exoplanet.png',
    description: 'Interactive Data Visualization of Exoplanets',
    accentColor: '#333333',
    links: [
      {
        type: LinkType.WEBSITE,
        name: 'Visit Exoplanet Explore',
        href: 'https://exoplanetexplore.vercel.app/',
      },
      {
        type: LinkType.GITHUB,
        name: 'View Source',
        href: 'https://github.com/sanvishal/Exoplanet-Explore',
      },
    ],
    about: [
      'Exoplanet Explore is a Data driven Visual Analysis of Exoplanets. The project is made for data analysis hackathon by hackerearth. It won first prize! The project took about 15 days to build. It was an awesome experience.',
      "I was a space geek since birth, I never stopped gazing at the sky and thinking about the stars and planets. It blows my mind if we think how miraculously small and alone we are in this infinitely expanding cosmos. I had the Kepler Telescope findings and NASA's official analytic data at my disposal. I barely had any knowledge about data visualization and analysis using programming. But the raw interest that I had in space exploration drove me through the learning process of programmatic data visualization. I had somewhat past experience in full-stack web development. with all these skills and my enthusiasm, I solely finished this project in a month. It was a wonderful, memorable experience. I loved every second sculpting this project from the scratch",
      'Technically, the project is build with plain old HTML, CSS, JS with D3.js for data viz and python pandas for intital data exploration and cleanup',
    ],
    images: [
      {
        link: '/images/exoplanet/exo-1.gif',
        alt: "A gif showing Exoplanet explore's interactive starmap atlas",
      },
      {
        link: '/images/exoplanet/exo-2.gif',
        alt: "A gif showing Exoplanet explore's correlation matrix",
      },
      {
        link: '/images/exoplanet/exo-3.png',
        alt: "A png showing John F. Kennedy's quote on space exploration",
      },
    ],
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
