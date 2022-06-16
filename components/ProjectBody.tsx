import {
  Box,
  Button,
  Center,
  HStack,
  Spacer,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { IconBaseProps } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { FiGlobe, FiLink } from 'react-icons/fi';
import { SiHashnode } from 'react-icons/si';
import { LinkType, Project, ProjectLink } from '../types';
import { HexToHSL, isColorTooDark } from '../utils/utils';
import { ChakraNextImage } from './ChakraNextImage';
import { RelativeImage } from './RelativeImage';

const LinkIcon = ({ type, ...props }: { type: LinkType } & IconBaseProps) => {
  switch (type) {
    case LinkType.GITHUB:
      return <AiFillGithub {...props} />;
    case LinkType.WEBSITE:
      return <FiGlobe {...props} />;
    case LinkType.BLOG:
      return <SiHashnode {...props} />;
    default:
      return <FiLink {...props} />;
  }
};

const getLinkColor = (type: LinkType): string => {
  switch (type) {
    case LinkType.GITHUB:
      return '#171515';
    case LinkType.BLOG:
      return '#3466f6';
    default:
      return '#fafafa';
  }
};

const ProjectLinkButton = ({
  children,
  projectLink,
  linkColor,
}: {
  children: any;
  projectLink: ProjectLink;
  linkColor: string;
}) => {
  const { lightnessOffset, tooDarkOffset } = useColorModeValue(
    { lightnessOffset: -5, tooDarkOffset: 0 },
    {
      lightnessOffset: 5,
      // adding special condition for #333333
      tooDarkOffset: isColorTooDark(linkColor) || linkColor === '#333333' ? 60 : 0,
    }
  );
  const { type, href } = projectLink;
  const baseColor = HexToHSL(linkColor);
  const bgColor = `hsla(${baseColor.h},${baseColor.s}%,${baseColor.l + tooDarkOffset}%,0.12)`;
  const textColor = `hsl(${baseColor.h},${baseColor.s}%,${
    baseColor.l + lightnessOffset + tooDarkOffset
  }%)`;
  const hoverColor = `hsla(${baseColor.h},${baseColor.s}%,${
    baseColor.l + lightnessOffset + tooDarkOffset
  }%,0.2)`;
  const focusColor = `hsla(${baseColor.h},${baseColor.s}%,${
    baseColor.l + lightnessOffset + tooDarkOffset
  }%,0.3)`;

  return (
    <Link href={href} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <Button
          leftIcon={<LinkIcon type={type} style={{ marginBottom: '2px' }} />}
          background={bgColor}
          color={textColor}
          _hover={{ background: hoverColor }}
          _focus={{ background: focusColor }}
          fontSize="sm"
          size={{ base: 'sm', md: 'md' }}
        >
          {children}
        </Button>
      </a>
    </Link>
  );
};

export const ProjectBody = ({ project }: { project: Project }) => {
  const shouldShowFullBtn = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Center w="full">
        {project.links && project?.links?.length && (
          <HStack spacing={4}>
            {project?.links.map((link) => {
              return (
                <ProjectLinkButton
                  projectLink={link}
                  key={link.name}
                  linkColor={
                    link.type === LinkType.WEBSITE
                      ? project.accentColor || '#fafafa'
                      : getLinkColor(link.type)
                  }
                >
                  {shouldShowFullBtn
                    ? link.name || 'Visit Link'
                    : link.name?.split(' ')[0] || 'Visit'}
                </ProjectLinkButton>
              );
            })}
          </HStack>
        )}
      </Center>
      <Spacer w="full" h={6} />
      {project?.about?.map((about, idx) => {
        return (
          <Text fontWeight="700" lineHeight="1.8" key={idx} mb={4}>
            {about}
          </Text>
        );
      })}
      <Spacer w="full" h={6} />
      <VStack w="full" spacing={6}>
        {project?.images?.map((image) => {
          return <RelativeImage key={image.link} alt={image.alt} src={image.link} />;
        })}
      </VStack>
    </>
  );
};
