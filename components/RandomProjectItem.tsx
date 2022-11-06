import { Box, Center, HStack, Text, Tooltip } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { RandomProject } from '../types';

export const RandomProjectItem = ({ project }: { project: RandomProject }) => {
  return (
    <Tooltip label={project.about} placement="top-end">
      <HStack
        w="full"
        justifyContent="space-between"
        position="relative"
        p={2}
        role="group"
        _hover={{
          '&::before': {
            transform: 'scale(1)',
            opacity: 0.04,
          },
        }}
        sx={{
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            borderRadius: '5px',
            background: 'var(--hue-col-2)',
            opacity: 0,
            transformOrigin: 'left 50%',
            transform: 'scale(0.5)',
            transition: 'transform 0.2s ease-in-out',
          },
        }}
      >
        <HStack justifyContent="flex-start" alignItems="flex-start">
          <Center position="relative" width="20px" height="20px" overflow="hidden">
            <Box
              position="absolute"
              _groupHover={{
                transform: 'translate(20px, -20px)',
              }}
              transition="transform 0.2s ease-in-out"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  width="20px"
                  height="20px"
                  style={{ borderRadius: '2px' }}
                />
              ) : (
                <Box w="20px" h="20px" bg="contentColor" opacity="0.1" borderRadius="50%"></Box>
              )}
            </Box>
            <Center
              _groupHover={{ transform: 'translate(0px, 0px)' }}
              transform="translate(-20px, 20px)"
              position="absolute"
              left="0"
              transition="transform 0.2s ease-in-out"
            >
              <FiArrowUpRight style={{ width: '25px' }} strokeWidth={2.5} />
            </Center>
          </Center>
          <Text fontSize="lg" fontWeight="400">
            {project.name}
          </Text>
        </HStack>
        <Box flexGrow={1} bg="contentColor" h="1px" opacity="0.06"></Box>
        <Text textAlign="right" opacity="0.5" maxW="400px">
          {project.description}
        </Text>
      </HStack>
    </Tooltip>
  );
};
