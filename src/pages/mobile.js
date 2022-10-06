
import { Layout  } from 'antd'
import AppHeader2 from '../components/Common/header2'
import './people.css'

// pages & components
import Home_m from '../components/People/Home_m'
import { Helmet } from 'react-helmet';






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


    
    <div className='left5'><Home_m /></div>
    
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