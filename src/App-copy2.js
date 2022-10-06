import React from 'react'

import {  Col, Row, Layout,  Card } from 'antd'
import './App.css'
import image1 from './images/p1.png'
import image2 from './images/p2.jpg'
import image3 from './images/p3.jpg'
import image4 from './images/p41.jpg'
import AppHeader2 from './components/Common/header2'
import { Helmet } from 'react-helmet';
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
      <Row>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
        <Col xs={{ span: 20 }} sm={{ span: 20 }} md={{ span: 20 }}>

        <div className="titleHolder">
          <h2 style={{fontSize:'24px', marginTop:'40px' }}>Integrative Structural Biology</h2>
        </div>

        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
        <Col xs={{ span: 20 }} sm={{ span: 20 }} md={{ span: 20 }}>
        <div className="contentHolder">
          We use multidisciplinary approaches across structural and computational biology to uncover the molecular details of how lipids are used as signaling molecules in mitochondria. The lab is currently supported by a UKRI Future Leaders Fellowship awarded in 2020.
        </div>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
        <Col xs={{ span: 20 }} sm={{ span: 20 }} md={{ span: 20 }}>
        <div className="titleHolder">
          <h2 style={{fontSize:'24px',  marginBottom:'20px'}}>Research Goal</h2>
        </div>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>


        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
        <Col xs={{ span: 20 }} sm={{ span: 20 }} md={{ span: 20 }}>
        <div className="contentHolder">
        My central goal is to resolve the molecular determinants of CL transport within mitochondria, in order to understand how CL is used as a quality control signal. This work will represent the first look, at the molecular level, at cardiolipin transport across mitochondrial membranes, which will provide a new understanding of this pathway in human health and disease. Alongside resolving the biological questions defined above, it will provide a new framework for mitochondrial simulations which I will make available to the biomolecular simulation community. As part of my collaborative approach, I will also continue to work closely with development of native mass spectrometry approaches to membrane complexes. Progress of the research program, and career development will be based upon collaborations to learn new techniques, development workshops, and industrial partnerships.
        </div>

        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }}></Col>
      </Row>
    


      <div className='center'>
      <Row>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
            
          <div style={{fontSize: '20px',textAlign: 'center', marginBottom:'40px'}}>
             Molecular Simulations
          </div>


            <Card
              style = {{background: '#f0f2f5'}}
              bordered={false}
              cover={<img alt="Molecular Simulations" src={image1} />}
            >
            </Card>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
          <div style={{fontSize: '20px',textAlign: 'center', marginBottom:'20px'}}>
            Cryo-Electron Miscoscopy
          </div>
          
            <Card
              style = {{background: '#f0f2f5'}}
              bordered={false}
              cover={<img alt="Cryo-Electron Miscoscopy" src={image2} />}
            >
              
            </Card>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0}}></Col>


          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
            
          <div style={{fontSize: '20px',textAlign: 'center', marginBottom:'20px'}}>
            X-Ray Crystallography
          </div>

            <Card
              style = {{background: '#f0f2f5'}}
              bordered={false}
              cover={<img alt="Molecular Simulations" src={image3} />}
            >
            
              
            </Card>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
            
          <div style={{fontSize: '20px',textAlign: 'center', marginBottom:'20px'}}>
            Next Generation Sequencing
          </div>
          
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

export default HomePage1;

