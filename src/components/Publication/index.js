import React from 'react'
import './App.css'
import PublicationPage0 from './mobile';
import PublicationPage1 from './pc';
import { layoutGenerator } from 'react-break';


const layout = layoutGenerator({
  mobile: 0,
  phablet: 989,
  tablet: 990,
  desktop: 992,
});

//const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');
//const OnDesktop = layout.is('desktop');

const PublicationPage = () => (
  <div>
  
    <OnAtMostPhablet>
      <PublicationPage0/>
    </OnAtMostPhablet>

    <OnAtLeastTablet>
      <PublicationPage1/>
    </OnAtLeastTablet>

  </div>
);

export default PublicationPage