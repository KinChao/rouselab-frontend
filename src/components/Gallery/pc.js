import React from 'react'
import {  Col, Row, Layout } from 'antd'
import './gallery.css'
import AppHeader from '../Common/header'
import { Helmet } from 'react-helmet';
import pic1 from './images/gallery_pic1.png'




const { Header, Content, Footer } = Layout;


const GalleryPage1 = () => {

  return (
  <Layout>
    <Helmet>
        <title>Gallery | RouseLab</title>
    </Helmet>

    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader />
      </Header>
    </div>

    
    <Content>

    <Row>




      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 20 }}>
      <div style={{ fontSize: '30px', textAlign: 'left', marginTop:'50px', marginBottom:'30px'}}>2022-09-30: First Rouse Lab floor social!</div>

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
      <div style={{ fontSize: '15px', textAlign: 'left', marginBottom:'20px' }}>From left to right: Vicky, Marco, Kin, Ayush</div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 2 }}></Col>


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

export default GalleryPage1
