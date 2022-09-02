import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Col, Row, Layout, Menu  } from 'antd'
import './App.css'
import image1 from './images/p1.png'
import image2 from './images/p2.jpg'
import image3 from './images/p3.jpg'
import image4 from './images/p4.jpg'



const { Title } = Typography;
const { Header, Content, Footer } = Layout;


const App = () => (
  <Layout>
    <div>
      <Header
        style={{
        padding: 12,
        background: '#bfbfbf',
      }}>
      <Title level={2} style={ {marginLeft: 15}}><Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>RouseLab</Link></Title>
      </Header>
    </div>
    <Content className="site-layout">
    <Menu 
      style={{background: '#F1F1F1', }}
      mode="horizontal">
      <Menu.Item><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item><Link to='/Publication'>Publication</Link></Menu.Item>
      <Menu.Item><Link to='/People'>People</Link></Menu.Item>
      <Menu.Item><Link to='/News'>News</Link></Menu.Item>
      <Menu.Item><Link to='/Contact'>Contact</Link></Menu.Item>
    </Menu>

    
    <p style={{color:'#F1F1F1'}}>1</p>

      <div
        style={{
        padding: 10,
        marginLeft: 15,
        textAlign: 'center',
        }}
      >
        <Title level={2} >Integrative Structural Biology</Title>
      </div>
      <div style={{
        fontSize: '17px',
        marginLeft: '20%',
        marginRight: '20%',
        textAlign: 'center',
        }}>

        We use multidisciplinary approaches across structural and computational biology to uncover the molecular details of how lipids are used as signaling molecules in mitochondria. The lab is currently supported by a UKRI Future Leaders Fellowship awarded in 2020.
        
      </div>
      

      <p style={{color:'#F1F1F1'}}>1</p>
      <p style={{color:'#F1F1F1'}}>1</p>




      <div
        
        style={{
          padding: 10,
          marginLeft: 15,
          textAlign: 'center',
        }}
      >
        <Title level={2} >Research Goal</Title>

      </div>
      <div style={{
        fontSize: '17px',
        marginLeft: '20%',
        marginRight: '20%',
        textAlign: 'center',
        }}>

        My central goal is to resolve the molecular determinants of CL transport within mitochondria, in order to understand how CL is used as a quality control signal. This work will represent the first look, at the molecular level, at cardiolipin transport across mitochondrial membranes, which will provide a new understanding of this pathway in human health and disease. Alongside resolving the biological questions defined above, it will provide a new framework for mitochondrial simulations which I will make available to the biomolecular simulation community. As part of my collaborative approach, I will also continue to work closely with development of native mass spectrometry approaches to membrane complexes. Progress of the research program, and career development will be based upon collaborations to learn new techniques, development workshops, and industrial partnerships.
        
      </div>
      <p style={{color:'#F1F1F1'}}>1</p>
      <p style={{color:'#F1F1F1'}}>1</p>
      <p style={{color:'#F1F1F1'}}>1</p>

      <Row>
      <Col flex={9}></Col>

      <Col flex={1}>
      <div style={{fontSize: '25px',textAlign: 'left'}}>
        Molecular Simulations
      </div>
      </Col>
      <Col flex={3}></Col>
      <Col flex={2}>
      <div style={{fontSize: '25px',textAlign: 'right'}}>
        Cryo-Electron Miscoscopy   
      </div>
      </Col>
      <Col flex={9}></Col>
      </Row>

      <p style={{color:'#F1F1F1'}}>1</p>

      <Row>
      <Col span={12}>
        <img src={image1} alt="" className='left1'/>
      </Col> 
      <Col span={12}>
        <img src={image2} alt="" className='right1'/>
      </Col>
      </Row>


      <p style={{color:'#F1F1F1'}}>1</p>
      <p style={{color:'#F1F1F1'}}>1</p>
      <p style={{color:'#F1F1F1'}}>1</p>

      <Row>
      <Col flex={8}></Col>

      <Col flex={1}>
      <div style={{fontSize: '25px',textAlign: 'center'}}>
        X-Ray Crystallography
      </div>
      </Col>
      <Col flex={3}></Col>
      <Col flex={2}>
      <div style={{fontSize: '25px',textAlign: 'right'}}>
        Next Generation Sequencing
      </div>
      </Col>
      <Col flex={8}></Col>
      </Row>

      <p style={{color:'#F1F1F1'}}>1</p>

      <Row>
      <Col span={12}>
        <img src={image3} alt="" className='left2'/>
      </Col> 
      <Col span={12}>
        <img src={image4} alt="" className='right2'/>
      </Col>
      </Row>
      
      
      <p style={{color:'#F1F1F1'}}>1</p>
      <p style={{color:'#F1F1F1'}}>1</p>





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

export default App;

