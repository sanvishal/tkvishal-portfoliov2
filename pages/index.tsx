import { Container, Spacer, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Blobs } from '../components/Blobs';
import { ChakraNextImage } from '../components/ChakraNextImage';
import { FancyLink } from '../components/FancyLink';
import { GrainyTexture } from '../components/GrainyTexture';
import { NavBar } from '../components/NavBar';

const Home: NextPage = () => {
  return (
    <Container maxW="4xl" px={3}>
      <NavBar />
      {/* <Blobs /> */}
      <Spacer w="full" h={10} />
      <ChakraNextImage
        src="/images/tk.png"
        width={100}
        height={100}
        quality={100}
        layout="responsive"
        showBlur={false}
      />
      <Spacer w="full" h={10} />
      <Text fontWeight="bold" fontSize="2xl">
        Vishal <span className="gradiant-text">TK</span>
      </Text>
      <Text fontSize="lg">
        Software Engineer @ <FancyLink href="https://www.presidio.com/">Presidio</FancyLink>
      </Text>
      <GrainyTexture />
      <div className="gradiant-bg" />
    </Container>
  );
};

export default Home;
