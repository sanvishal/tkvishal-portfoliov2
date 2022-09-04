import { Box, Container, Spacer } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { GradiantBg } from './GradiantBg';
import { GrainyTexture } from './GrainyTexture';
import { NavBar } from './NavBar';
import { Socials } from './Socials/Socials';

export const Content = ({
  showFooter = false,
  children,
}: PropsWithChildren<{ showFooter?: boolean }>) => {
  return (
    <Container maxW="3xl" px={3}>
      <Box as="main" width="full" minH="100vh" display="flex" flexDir="column">
        <Box>
          <NavBar />
          <Spacer w="full" h={{ md: 32, base: 10 }} />
          {children}
        </Box>
        <GrainyTexture />
        <GradiantBg />
      </Box>
      {showFooter && <Socials isMobile />}
    </Container>
  );
};
