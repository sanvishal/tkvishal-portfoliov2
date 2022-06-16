import { Center, Container, Divider, Spacer, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ChakraNextImage } from '../components/ChakraNextImage';
import { FancyLink } from '../components/FancyLink';
import { GradiantBg } from '../components/GradiantBg';
import { GrainyTexture } from '../components/GrainyTexture';
import { NavBar } from '../components/NavBar';
import { ProjectSection } from '../components/ProjectSection';

const Home: NextPage = () => {
  return (
    <Container maxW="3xl" px={3}>
      <NavBar />
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
      <Text fontWeight="black" fontSize="2xl">
        Vishal <span className="gradiant-text">TK</span>
      </Text>
      <Text fontSize="lg">
        Software Engineer @ <FancyLink href="https://www.presidio.com/">Presidio</FancyLink>
      </Text>
      <Spacer w="full" h={8} />
      <Text fontWeight="700" lineHeight="1.8">
        I&apos;m a Software Engineer based in Chennai, India. I love to build beautiful, minimal,
        performant applications, work on design systems and UI/UX design, turning dreams to reality
        🌠
      </Text>
      <Spacer w="full" h={6} />
      <Text fontWeight="700" as="i" opacity="0.7">
        apart from that...
      </Text>
      <Spacer w="full" h={4} />
      <Text fontWeight="700" lineHeight="1.8">
        I like to play & <span style={{ fontWeight: '900' }}>make</span> games 👾, watch{' '}
        <FancyLink href="https://boxd.it/gX9Vo">movies</FancyLink> and anime, make generative art
        🎨, build 3D environments 🏔️, hanging out with friends ✨, play badminton 🏸 and cricket 🏏
      </Text>
      <Spacer w="full" h={14} />
      <Center>🌻</Center>
      <Spacer w="full" h={14} />
      <ProjectSection />
      <Spacer w="full" h={4} />
      {/* <GrainyTexture /> */}
      <GradiantBg />
    </Container>
  );
};

export default Home;
