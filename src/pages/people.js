
import './people.css'
import PeoplePage0 from './mobile';
import PeoplePage1 from './pc';
import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 1014,
  tablet: 1015,
  desktop: 1016,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');




const PeoplePage = () => (
  <div>
  
    <OnAtMostPhablet>
      <PeoplePage0/>
    </OnAtMostPhablet>

    <OnAtLeastTablet>
      <PeoplePage1/>
    </OnAtLeastTablet>

  </div>
);

export default PeoplePage