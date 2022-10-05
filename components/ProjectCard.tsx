import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Project } from '../types';
import { ChakraNextImage } from './ChakraNextImage';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Box
      border="0.5px solid"
      borderColor="blackAlpha.100"
      borderRadius={6}
      overflow="hidden"
      role="group"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 16px rgba(29,54,109,0.1)',
      }}
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      style={{ boxShadow: '0 1px 2px rgba(29,54,109,0.08)' }}
      boxShadow="0 1px 2px rgba(29,54,109,0.08)"
    >
      <Box p={6} overflow="hidden">
        <HStack alignItems="flex-start" spacing={4}>
          <Box p={0} borderRadius={16} position="relative">
            <ChakraNextImage
              src={project.image}
              width="70px"
              height="70px"
              quality={10}
              style={{
                position: 'absolute',
                zIndex: 1,
                pointerEvents: 'none',
                top: 'calc(50% - 30px)',
                // left: 'calc(70%)',
                width: '100%',
                height: '100%',
                transform: 'scaleY(3) scaleX(3.5)',
                opacity: '0.2',
                filter: 'blur(13px) saturate(170%)',
                transformOrigin: '50% 50%',
              }}
              _groupHover={{
                opacity: '0.4 !important',
                transform: 'scaleY(5) scaleX(5.5) !important',
              }}
              transition="all 1s ease-in-out"
            />
            <ChakraNextImage
              src={project.image}
              width="70px"
              height="70px"
              quality={100}
              style={{ zIndex: 2, filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.10))' }}
            />
          </Box>
          <VStack alignItems="flex-start" spacing={1}>
            <Text fontWeight="800" textShadow="0px 0px var(--chakra-colors-gray-500)" fontSize="xl">
              {project.name}
            </Text>
            <Text fontWeight="500" textShadow="0px 0px var(--chakra-colors-gray-500)" fontSize="md">
              {project.description}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};
