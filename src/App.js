import React from 'react'

import './App.css'
import { layoutGenerator } from 'react-break';
import HomePage2 from './App-copy'
import HomePage1 from './App-copy2'



const layout = layoutGenerator({
  mobile: 0,
  phablet: 989,
  tablet: 990,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');

const App = () => (
  <div>
    <OnAtLeastTablet>
      <HomePage2/>
    </OnAtLeastTablet>

    <OnAtMostPhablet>
      <HomePage1/>
    </OnAtMostPhablet>


  </div>
);

export default App;

