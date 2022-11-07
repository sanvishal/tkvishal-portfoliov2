import { NextPage } from 'next';
import { Content } from '../components/Content';
import { ProjectsPage } from '../views/ProjectsPage';

const Projects: NextPage = () => {
  return (
    <Content>
      <ProjectsPage />
    </Content>
  );
};

export default Projects;
