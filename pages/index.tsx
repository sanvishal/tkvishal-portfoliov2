import { AnimatePresence } from 'framer-motion';
import type { NextPage } from 'next';
import { Content } from '../components/Content';
import { HomePage } from '../views/HomePage';

const Home: NextPage = () => {
  return (
    <Content showFooter>
      <HomePage />
    </Content>
  );
};

export default Home;
