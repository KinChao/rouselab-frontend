
import { Layout  } from 'antd'
import AppHeader2 from '../components/Common/header2'
import './people.css'

// pages & components
import Homem from '../components/People/Homem'
import { Helmet } from 'react-helmet';
import Banner from '../components/Common/bannerM';





const { Header, Content, Footer } = Layout;


function PeoplePage0() {

  return (
    
    <Layout>
      <Helmet>
        <title>People | RouseLab</title>
      </Helmet>
    <div>
    <Header style={{background: '#bfbfbf'}}>
        <AppHeader2 />
      </Header>
    </div>

    <Content className="site-layout">
    <Banner/>

    
    <div className='left5'><Homem /></div>
    
    </Content>

    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      ©2022 ROUSELAB
    </Footer>
  </Layout>
  )
}

export default PeoplePage0;