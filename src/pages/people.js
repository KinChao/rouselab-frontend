
import './people.css'
import PeoplePage0 from './mobile';
import PeoplePage1 from './pc';
import PeoplePageMac from './mac';
import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 1014,
  tablet: 1015,
  desktop: 1700,
});

const OnTablet = layout.is('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');
const OnAtLeastDesktop = layout.isAtLeast('desktop');



const PeoplePage = () => (
  <div>
  
    <OnAtMostPhablet>
      <PeoplePage0/>
    </OnAtMostPhablet>

    <OnTablet>
      <PeoplePageMac/>
    </OnTablet>

    <OnAtLeastDesktop>
      <PeoplePage1/>
    </OnAtLeastDesktop>

  </div>
);

export default PeoplePage