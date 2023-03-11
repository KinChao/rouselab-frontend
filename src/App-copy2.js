import React from 'react'

import {  Col, Row, Layout } from 'antd'
import './App.css'
import AppHeader2 from './components/Common/header2'
import { Helmet } from 'react-helmet';
import Banner from './components/Common/bannerM'
import art from './images/vicky_art3.jpg'
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

const HomePage1 = () => (
  
  <Layout>
    <Helmet>
        <title>Home | RouseLab</title>
    </Helmet>
    
    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader2 />
      </Header>
    </div>
    <Content>
    <Banner/>

    <Row>

    
    <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1}}> </Col>
    <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 22}}>

      <div className='container' style={{marginTop:'5px'}}>
        <img alt=""
        src={art}/>
      </div>
      <div className='centeredm'>
        <h2 style={{fontSize:'20px',}}>Integrative Structural</h2>
        <h2 style={{fontSize:'20px'}}>Biology</h2>
        <h2 style={{fontSize:'13px', marginTop:'10px'}}>
        
        <Link to='/Research' style={{background:"#f0f2f5"}} >
        Explore our research
        </Link>   

        </h2>
      </div>

    </Col>
    <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1}}> </Col>
    


    <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2}}> </Col>
    <Col xs={{ span: 20 }} sm={{ span: 20 }} md={{ span: 20}}> 
    <div style={{fontSize:'12px', marginTop:'10px', textAlign:'center', marginBottom:'5px'}}>
    Homepage artwork by PhD student Vicky
    </div>
    </Col>
    <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2}}> </Col>
    </Row>
    
    </Content>



    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      ©2023 ROUSELAB
    </Footer>
  </Layout>
);

export default HomePage1;

