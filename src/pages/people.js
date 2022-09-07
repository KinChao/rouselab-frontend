
import { Layout  } from 'antd'
import AppHeader from '../components/Common/header'
import './people.css'

// pages & components
import Home from '../components/People/Home'




const { Header, Content, Footer } = Layout;


function PeoplePage() {

  return (
    
    <Layout>
    <div>
    <Header style={{background: '#bfbfbf'}}>
        <AppHeader />
      </Header>
    </div>

    <Content className="site-layout">


    <p style={{color:'#F1F1F1'}}>1</p>
    <p style={{color:'#F1F1F1', fontSize:'3px'}}>1</p>

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

export default PeoplePage;