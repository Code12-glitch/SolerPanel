
import ProjectGrid from '@/components/grid-connected-systems';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Grid Connected Systems - SolerPanel-Solar & Renewable Energy React Next js Template',
  // description: 'The Solar Panel React Next js template is a modern and responsive design specifically created for websites related to solar energy and renewable energy solutions',
}



const ProjectGridPage = () => {
  return (
    <Wrapper>
      <ProjectGrid />
    </Wrapper>
  );
};

export default ProjectGridPage;