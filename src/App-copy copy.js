import React from 'react'

import {  Col, Row, Layout,  Card } from 'antd'
import './App.css'
import image1 from './images/p1.png'
import image2 from './images/p2.jpg'
import image3 from './images/p3.jpg'
import image4 from './images/p41.jpg'
import AppHeader from './components/Common/header'
import { Helmet } from 'react-helmet';
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
    <Content className="site-layout">

    <p style={{color:'#f0f2f5'}}>1</p>
    <p style={{color:'#f0f2f5'}}>1</p>

      <div className="container-fluid">
      <div>
        <div className="titleHolder">
          <h2 style={{fontSize:'28px'}}>Integrative Structural Biology</h2>
        </div>
      </div>
      <div className="contentHolder">

        We use multidisciplinary approaches across structural and computational biology to uncover the molecular details of how lipids are used as signaling molecules in mitochondria. The lab is currently supported by a UKRI Future Leaders Fellowship awarded in 2020.
        
      </div>
      </div>
      






      <div className="container-fluid">
      <div>
        <div className="titleHolder">
          <h2 style={{fontSize:'28px'}}>Research Goal</h2>
        </div>

      </div>
      <div className="contentHolder">
      <p>
        My central goal is to resolve the molecular determinants of CL transport within mitochondria, in order to understand how CL is used as a quality control signal. This work will represent the first look, at the molecular level, at cardiolipin transport across mitochondrial membranes, which will provide a new understanding of this pathway in human health and disease. Alongside resolving the biological questions defined above, it will provide a new framework for mitochondrial simulations which I will make available to the biomolecular simulation community. As part of my collaborative approach, I will also continue to work closely with development of native mass spectrometry approaches to membrane complexes. Progress of the research program, and career development will be based upon collaborations to learn new techniques, development workshops, and industrial partnerships.
      </p> 
      </div>
      </div>
      <p style={{color:'#f0f2f5'}}>1</p>



      <div className='center'>
      <Row>
          <Col xs={{ span: 0 }} sm={{ span: 2 }} md={{ span: 3 }}></Col>
          <Col xs={{ span: 24 }} sm={{ span: 10 }} md={{ span: 8 }}>
            
          <div style={{fontSize: '20px',textAlign: 'center'}}>
             Molecular Simulations
          </div>

          <p style={{color:'#f0f2f5'}}>1</p>
          <p style={{color:'#f0f2f5'}}>1</p>
            <Card
              style = {{background: '#f0f2f5'}}
              bordered={false}
              cover={<img alt="Molecular Simulations" src={image1} />}
            >
            </Card>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
          <Col xs={{ span: 24 }} sm={{ span: 10 }} md={{ span: 8 }}>
          <div style={{fontSize: '20px',textAlign: 'center'}}>
            Cryo-Electron Miscoscopy
          </div>
          <p style={{color:'#f0f2f5'}}>1</p>
            <Card
              style = {{background: '#f0f2f5'}}
              bordered={false}
              cover={<img alt="Cryo-Electron Microscopy" src={image2} />}
            >
              
            </Card>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 2 }} md={{ span: 3}}></Col>


          <Col xs={{ span: 0 }} sm={{ span: 2 }} md={{ span: 3 }}></Col>
          <Col xs={{ span: 24 }} sm={{ span: 10 }} md={{ span: 8 }}>
            
          <div style={{fontSize: '20px',textAlign: 'center'}}>
            X-Ray Crystallography
          </div>
          <p style={{color:'#f0f2f5'}}>1</p>
            <Card
              style = {{background: '#f0f2f5'}}
              bordered={false}
              cover={<img alt="Molecular Simulations" src={image3} />}
            >
            
              
            </Card>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
          <Col xs={{ span: 24 }} sm={{ span: 10 }} md={{ span: 8 }}>
            
          <div style={{fontSize: '20px',textAlign: 'center'}}>
            Next Generation Sequencing
          </div>
          <p style={{color:'#f0f2f5'}}>1</p>
            <Card
              style = {{background: '#f0f2f5'}}
              bordered={false}
              cover={<img alt="Cryo-Electron Miscoscopy" src={image4} />}
            >
              
            </Card>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 2 }} md={{ span: 3 }}></Col>

        </Row>
        </div>

      <p style={{color:'#f0f2f5'}}>1</p>



      


    </Content>



    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      ©2022 ROUSELAB
    </Footer>
  </Layout>
);

export default HomePage2;

