
import { Layout  } from 'antd'
import AppHeader from '../components/Common/header'
import './people.css'

// pages & components
import HomeMac from '../components/People/HomeMac'
import { Helmet } from 'react-helmet';
import Banner from '../components/Common/banner';





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
    <Banner/>

    
    <div className='left4'><HomeMac /></div>
    
    <div style={{fontSize: '20px', marginLeft:'10%', marginTop:'40px'}}>
      Former MRes/ MSc group members:
    </div>
    <div style={{fontSize: '14px', marginLeft:'10%',marginTop:'15px'}}>
    • 2021-2022 : SMB Adina Avram, MCB Lisa Casteller, SMB Olivia Smith, MCB Vicky Xu, ABB Ayush Upadhyay, MCB Marco Leong
    </div>
    <div style={{fontSize: '14px', marginLeft:'10%', marginTop:'5px', marginBottom:'30px'}}>
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

export default PeoplePage1;