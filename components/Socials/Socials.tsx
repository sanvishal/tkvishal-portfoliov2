import { Box, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IconColors, links } from '../../data';
import { LinkType } from '../../types';
import { SocialIcon } from './SocialIcon';

export const Socials = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [hoveredIcon, setHoveredIcon] = useState<{ type: LinkType; idx: number }>({
    idx: 0,
    type: LinkType.TWITTER,
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = ({ type, idx }: { type: LinkType; idx: number }) => {
    setIsHovering(true);
    setHoveredIcon({ idx, type });
  };

  return (
    <Box
      display={{ base: 'block', md: isMobile ? 'none' : 'block' }}
      pos={isMobile ? 'fixed' : 'sticky'}
      w={isMobile ? 'full' : 'auto'}
      top={isMobile ? 'unset' : '40px'}
      left={isMobile ? '0px' : 'unset'}
      bottom={isMobile ? '0px' : 'unset'}
      my={isMobile ? 3 : 0}
      onMouseLeave={() => setIsHovering(false)}
    >
      {!isMobile && (
        <Box
          pos="absolute"
          w="40px"
          h="40px"
          opacity={isHovering ? 1 : 0}
          bg={
            !IconColors[hoveredIcon.type]
              ? 'transparent'
              : hoveredIcon.type === LinkType.GITHUB
              ? 'commonIconBgColor'
              : `${IconColors[hoveredIcon.type]}20`
          }
          left="-50px"
          transition="all 0.2s cubic-bezier(0.6, 0.02, 0.05, 0.9)"
          top={`${(40 + 8) * hoveredIcon?.idx || 0}px`}
          borderRadius={10}
        ></Box>
      )}
      <Stack
        justify={isMobile ? 'center' : 'left'}
        pos={isMobile ? 'relative' : 'absolute'}
        left={isMobile ? '0px' : '-50px'}
        direction={isMobile ? 'row' : 'column'}
      >
        <SocialIcon
          type={LinkType.TWITTER}
          link={links[LinkType.TWITTER]}
          isMobile={isMobile}
          onHover={() => {
            handleHover({ idx: 0, type: LinkType.TWITTER });
          }}
        />
        <SocialIcon
          type={LinkType.GITHUB}
          link={links[LinkType.GITHUB]}
          isMobile={isMobile}
          onHover={() => {
            handleHover({ idx: 1, type: LinkType.GITHUB });
          }}
        />
        <SocialIcon
          type={LinkType.DRIBBBLE}
          link={links[LinkType.DRIBBBLE]}
          isMobile={isMobile}
          onHover={() => {
            handleHover({ idx: 2, type: LinkType.DRIBBBLE });
          }}
        />
        <SocialIcon
          type={LinkType.LINKEDIN}
          link={links[LinkType.LINKEDIN]}
          isMobile={isMobile}
          onHover={() => {
            handleHover({ idx: 3, type: LinkType.LINKEDIN });
          }}
        />
        {/* <SocialIcon type={LinkType.WHATSAPP} link={links[LinkType.WHATSAPP]} isMobile={isMobile} /> */}
      </Stack>
    </Box>
  );
};
