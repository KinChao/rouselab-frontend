import React from 'react'
import { Typography, Col, Row, Layout } from 'antd'
import './contact.css'
import image1 from './images/p1.png'
import image2 from './images/p22.png'
import image3 from './images/p3.jpg'
import AppHeader2 from '../Common/header2'
import { Helmet } from 'react-helmet';

const { Title, Text} = Typography;
const { Header, Content, Footer } = Layout;


const ContactPage0 = () => {

  return (
  <Layout>
    <Helmet>
        <title>Contact | RouseLab</title>
    </Helmet>

    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader2 />
      </Header>
    </div>

    <Content className="site-layout">
    

    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 14 }} md={{ span: 14 }}>
      <div style={{ fontSize: '16px', marginTop:'40px', marginBottom:'25px'}}>If you’d like to know more about the research or are thinking of joining us, feel free to contact us. Informal discussions are very welcome.</div>
      <div style={{ fontSize: '16px', marginTop:'20px', marginBottom:'40px'}}>I’m always happy to discuss and support postdocs and students</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>




      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 19 }} sm={{ span: 5 }} md={{ span: 5 }}>
        <div>
          <img 
          alt =""
          src={image3}/>
        </div>
      </Col>
      <Col xs={{ span: 4 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>

      
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 5 }} md={{ span: 7 }}>
      <Title level={4}><div style={{textAlign: 'left', marginTop:'10px'}}>Dr Sarah Rouse</div></Title>
      <div style={{fontSize: '14px',textAlign: 'left', marginBottom:'10px'}}>Imperial College London</div>

      <div style={{fontSize: '14px',textAlign: 'left', marginBottom:'10px'}}>Department of Life Science</div>
      <div style={{fontSize: '14px',textAlign: 'left', marginBottom:'10px'}}>Level 5, Sir Ernst Chain Building</div>
      <div style={{fontSize: '14px',textAlign: 'left', marginBottom:'10px'}}>South Kensington, SW7 2AZ</div>
      <div style={{fontSize: '14px',textAlign: 'left', marginBottom:'10px'}}>London, United Kingdom</div>
      <div style={{fontSize: '14px',textAlign: 'left'}}>
        <Text underline><a href="mailto:s.rouse@imperial.ac.uk">s.rouse@imperial.ac.uk</a></Text>
      </div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>





      <Col xs={{ span: 0 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 1 }} sm={{ span: 5 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 11 }} sm={{ span: 5 }} md={{ span: 4 }}>



      <div className='img1' style={{marginTop:'40px',marginBottom:'30px',marginRight:'-25px'}}>
          <img alt=""
          style={{width: 200}}
          src={image1}/>
        </div>
      </Col>
      <Col xs={{ span: 11 }} sm={{ span: 5 }} md={{ span: 4 }}>


        <div className='img2' style={{marginTop:'32px', marginLeft:'40px'}}>
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

export default ContactPage0
