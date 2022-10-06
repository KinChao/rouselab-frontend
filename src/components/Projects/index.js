import React from 'react'
import { Typography, Col, Row, Layout } from 'antd'
import './project.css'
import AppHeader from '../Common/header'
import { Helmet } from 'react-helmet';
import ayush1 from './images/ayush1.jpg'
import ayush2 from './images/ayush2.jpg'
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
