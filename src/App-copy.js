import React from 'react'

import {  Col, Row, Layout } from 'antd'
import './App.css'
import AppHeader from './components/Common/header'
import { Helmet } from 'react-helmet';
import Banner from './components/Common/banner'
import art from './images/vicky_art2.jpg'
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;


const HomePage2 = () => (
  
  <Layout>
    <Helmet>
        <title>Home | RouseLab</title>
    </Helmet>
    
    <div>
      <Header style={{background: '#bfbfbf'}}>
        <AppHeader />
      </Header>
    </div>
    <Content>
    <Banner/>

    <Row>

    
    <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2}}> </Col>
    <Col xs={{ span: 20 }} sm={{ span: 20 }} md={{ span: 20}}>

      <div className='container' style={{marginTop:'5px'}}>
        <img alt=""
        src={art}/>
      </div>
      <div className='centered'>
        <h2 style={{fontSize:'40px'}}>Integrative Structural</h2>
        <h2 style={{fontSize:'40px'}}>Biology</h2>
        <h2 style={{fontSize:'25px', marginTop:'20px'}}>
        
        <Link to='/Research' style={{background:"#f0f2f5"}} >
        Explore our research
        </Link>
        
        

        </h2>
      </div>

      
    </Col>
    <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2}}> </Col>
    


    <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2}}> </Col>
    <Col xs={{ span: 20 }} sm={{ span: 20 }} md={{ span: 20}}> 
    <div style={{marginTop:'10px', textAlign:'center', marginBottom:'25px'}}>
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

export default HomePage2;

