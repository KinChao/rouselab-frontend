
import { Layout  } from 'antd'
import AppHeader from '../components/Common/header'
import './people.css'

// pages & components
import Home from '../components/People/Home'
import { Helmet } from 'react-helmet';
import PeoplePage0 from './mobile';
import PeoplePage1 from './pc';
import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 989,
  tablet: 990,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');


const { Header, Content, Footer } = Layout;


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