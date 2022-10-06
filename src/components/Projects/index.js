import React from 'react'
import './project.css'
import { layoutGenerator } from 'react-break';
import ProjectPage0 from './mobile';
import ProjectPage1 from './pc';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 990,
  desktop: 992,
});

const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');
//const OnAtMostPhablet = layout.isAtMost('phablet');
//const OnDesktop = layout.is('desktop');

const ProjectPage = () => (
  <div>
    <OnMobile>
      <ProjectPage0/>
    </OnMobile>

    <OnAtLeastTablet>
      <ProjectPage1/>
    </OnAtLeastTablet>


  </div>
);

export default ProjectPage
