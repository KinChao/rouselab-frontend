import React from 'react'
import {  Col, Row, Layout } from 'antd'
import './gallery.css'
import AppHeader2 from '../Common/header2'
import { Helmet } from 'react-helmet';
import pic1 from './images/gallery_pic1.png'
import uniform from './uniform.png'
import Banner from '../Common/bannerM';


const { Header, Content, Footer } = Layout;


const GalleryPage0 = () => {

  return (
  <Layout>
    <Helmet>
        <title>Gallery | RouseLab</title>
    </Helmet>

    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader2 />
      </Header>
    </div>

    
    <Content>
      <Banner/>
    <Row>



      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 20 }}>
      <div style={{ fontSize: '20px', textAlign: 'left', marginTop:'30px'}}>2022-09-30:</div>
      <div style={{ fontSize: '18px', textAlign: 'left', marginTop:'10px', marginBottom:'20px'}}>First Rouse Lab floor social!</div>

      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 2 }}></Col>


      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 20 }}>
        <div>
          <img alt=""
          src={pic1}/>
        </div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 2 }}></Col>

      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 20 }}>
      <div style={{ fontSize: '10px', textAlign: 'left' }}>From left to right: Vicky, Marco, Kin, Ayush</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 2 }}></Col>


      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }}></Col>
      <Col xs={{ span: 15 }} sm={{ span: 15 }} md={{ span: 15 }}>
        <div style={{ fontSize: '18px', textAlign: 'left', marginTop:'30px', marginBottom:'10px'}}>Lab uniform :)</div>
        <div>
          <img alt=""
          style={{width: '100%'}}
          src={uniform}/>
        </div>
        <div style={{ fontSize: '10px', textAlign: 'left', marginTop:'10px', marginBottom:'20px'}}>**All new member must buy this black jacket from Uniqlo in order to join the lab**</div>
      </Col>
      <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }}></Col>
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

export default GalleryPage0
