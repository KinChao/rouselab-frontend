import React from 'react'
import './gallery.css'
import GalleryPage0 from './mobile';
import GalleryPage1 from './pc';
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

const GalleryPage = () => (
  <div>
  
    <OnAtMostPhablet>
      <GalleryPage0/>
    </OnAtMostPhablet>

    <OnAtLeastTablet>
      <GalleryPage1/>
    </OnAtLeastTablet>



  </div>
);

export default GalleryPage
