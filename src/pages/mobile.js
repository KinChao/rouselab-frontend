
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
    
    <div style={{fontSize: '16px', marginLeft:'5%', marginTop:'40px'}}>
      Former MRes/ MSc group members :
    </div>
    <div style={{fontSize: '12px', marginLeft:'5%',marginTop:'15px'}}>
    • 2021-2022 : SMB Adina Avram, MCB Lisa Casteller, SMB Olivia Smith, MCB Vicky Xu, ABB Ayush Upadhyay, MCB Marco Leong
    </div>
    <div style={{fontSize: '12px', marginLeft:'5%', marginTop:'5px', marginBottom:'30px'}}>
    • 2020-2021 : SMB Mumu Sottatipreedawong, MCB Connor Daniels, ABB Francesca Channon
    </div>

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