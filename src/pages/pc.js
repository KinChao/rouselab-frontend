
import { Layout  } from 'antd'
import AppHeader from '../components/Common/header'
import './people.css'

// pages & components
import Home from '../components/People/Home'
import { Helmet } from 'react-helmet';






const { Header, Content, Footer } = Layout;


function PeoplePage1() {

  return (
    
    <Layout>
      <Helmet>
        <title>People | RouseLab</title>
      </Helmet>
    <div>
    <Header style={{background: '#bfbfbf'}}>
        <AppHeader />
      </Header>
    </div>

    <Content className="site-layout">


    
    <div className='left4'><Home /></div>
    
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

export default PeoplePage1;