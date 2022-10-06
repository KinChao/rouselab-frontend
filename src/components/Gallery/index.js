import React from 'react'
import {  Col, Row, Layout } from 'antd'
import './gallery.css'
import AppHeader from '../Common/header'
import { Helmet } from 'react-helmet';
import pic1 from './images/gallery_pic1.png'
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
