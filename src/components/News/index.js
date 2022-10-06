import React from 'react'
import './news.css'
import { layoutGenerator } from 'react-break';
import NewsPage0 from "./mobile";
import NewsPage1 from "./pc"

const layout = layoutGenerator({
  mobile: 0,
  phablet: 989,
  tablet: 990,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');

const NewsPage = () => (
  <div>
  
    <OnAtMostPhablet>
      <NewsPage0/>
    </OnAtMostPhablet>

    <OnAtLeastTablet>
      <NewsPage1/>
    </OnAtLeastTablet>



  </div>
);

export default NewsPage