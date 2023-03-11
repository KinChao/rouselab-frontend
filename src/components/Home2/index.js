import React from 'react'
import ResearchPage0 from './mobile';
import ResearchPage1 from './pc';
import { layoutGenerator } from 'react-break';




const layout = layoutGenerator({
  mobile: 0,
  phablet: 1014,
  tablet: 1015,
  desktop: 1016,
});

//const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');
//const OnDesktop = layout.is('desktop');

const ResearchPage = () => (
  <div>
  
    <OnAtMostPhablet>
      <ResearchPage0/>
    </OnAtMostPhablet>

    <OnAtLeastTablet>
      <ResearchPage1/>
    </OnAtLeastTablet>



  </div>
);

export default ResearchPage
