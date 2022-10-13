import React from 'react'
import { Typography, Col, Row, Layout } from 'antd'
import './contact.css'
import image1 from './images/p1.png'
import image2 from './images/p22.png'
import image3 from './images/p3.jpg'
import AppHeader from '../Common/header'
import { Helmet } from 'react-helmet';
import Banner from '../Common/banner'

const { Title, Text} = Typography;
const { Header, Content, Footer } = Layout;


const ContactPage1 = () => {

  return (
  <Layout>
    <Helmet>
        <title>Contact | RouseLab</title>
    </Helmet>

    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader />
      </Header>
    </div>

    <Content className="site-layout">
    <Banner/>

    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 14 }} md={{ span: 14 }}>
      <div style={{ fontSize: '20px', marginTop:'60px', marginBottom:'60px'}}>If you’d like to know more about the research or are thinking of joining us, feel free to contact us. Informal discussions are very welcome. I’m always happy to discuss and support postdocs and students</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>




      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 16 }} sm={{ span: 5 }} md={{ span: 5 }}>
        <div>
          <img 
          alt =""
          src={image3}/>
        </div>
      </Col>
      <Col xs={{ span: 7 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 5 }} md={{ span: 7 }}>
      <Title level={2}><div style={{textAlign: 'left'}}>Dr Sarah Rouse</div></Title>
      <div style={{fontSize: '18px',textAlign: 'left', marginBottom:'30px'}}>Imperial College London</div>

      <div style={{fontSize: '18px',textAlign: 'left', marginBottom:'30px'}}>Department of Life Science</div>
      <div style={{fontSize: '18px',textAlign: 'left', marginBottom:'30px'}}>Level 5, Sir Ernst Chain Building</div>
      <div style={{fontSize: '18px',textAlign: 'left', marginBottom:'30px'}}>South Kensington, SW7 2AZ</div>
      <div style={{fontSize: '18px',textAlign: 'left', marginBottom:'30px'}}>London, United Kingdom</div>
      <div style={{fontSize: '18px',textAlign: 'left'}}>
        <Text underline><a href="mailto:s.rouse@imperial.ac.uk">s.rouse@imperial.ac.uk</a></Text>
      </div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>





      <Col xs={{ span: 0 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 11 }} sm={{ span: 5 }} md={{ span: 4 }}>



      <div className='img1' style={{marginTop:'50px',marginBottom:'50px'}}>
          <img alt=""
          style={{width: 200}}
          src={image1}/>
        </div>
      </Col>
      <Col xs={{ span: 11 }} sm={{ span: 5 }} md={{ span: 4 }}>


        <div className='img2' style={{marginTop:'42px'}}>
              <img 
              alt=""
              style={{width: 180}}
              src={image2}/>
        </div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 6 }}></Col>
    </Row>
    

    
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      ©2022 ROUSELAB
    </Footer>
  </Layout>

)}

export default ContactPage1
