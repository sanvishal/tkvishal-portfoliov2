import { Box, Stack } from '@chakra-ui/react';
import { links } from '../../data';
import { LinkType } from '../../types';
import { SocialIcon } from './SocialIcon';

export const Socials = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <Box
      display={{ base: 'block', md: isMobile ? 'none' : 'block' }}
      pos={isMobile ? 'relative' : 'sticky'}
      w={isMobile ? 'full' : 'auto'}
      top="40px"
      my={isMobile ? 10 : 0}
    >
      <Stack
        justify={isMobile ? 'center' : 'left'}
        pos={isMobile ? 'relative' : 'absolute'}
        left={isMobile ? '0px' : '-50px'}
        direction={isMobile ? 'row' : 'column'}
      >
        <SocialIcon type={LinkType.TWITTER} link={links[LinkType.TWITTER]} isMobile={isMobile} />
        <SocialIcon type={LinkType.GITHUB} link={links[LinkType.GITHUB]} isMobile={isMobile} />
        <SocialIcon type={LinkType.DRIBBBLE} link={links[LinkType.DRIBBBLE]} isMobile={isMobile} />
        <SocialIcon type={LinkType.LINKEDIN} link={links[LinkType.LINKEDIN]} isMobile={isMobile} />
        <SocialIcon type={LinkType.WHATSAPP} link={links[LinkType.WHATSAPP]} isMobile={isMobile} />
      </Stack>
    </Box>
  );
};
