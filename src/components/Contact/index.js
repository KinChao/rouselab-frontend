import { Link } from 'react-router-dom'
import React from 'react'
import { Typography, Col, Row, Layout, Menu } from 'antd'
import './contact.css'
import image1 from './images/p1.png'
import image2 from './images/p22.png'
import image3 from './images/p3.jpg'

const { Title, Text} = Typography;
const { Header, Content, Footer } = Layout;


const ContactPage = () => {

  return (
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
      style={{background: '#F1F1F1' }}
      mode="horizontal">
      <Menu.Item><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item><Link to='/Publication'>Publication</Link></Menu.Item>
      <Menu.Item><Link to='/People'>People</Link></Menu.Item>
      <Menu.Item><Link to='/News'>News</Link></Menu.Item>
      <Menu.Item><Link to='/Contact'>Contact</Link></Menu.Item>
    </Menu>


    <div>


      <div style={{ fontSize: '20px', marginTop: '2%', marginLeft: '20%', marginRight: '20%', textAlign: 'left',}}><p>If you’d like to know more about the research or are thinking of joining us, feel free to contact us. Informal discussions are very welcome. I’m always happy to discuss and support postdocs and students</p></div>
    </div>

    <div className='left11'>

    <Row >

      <Col flex={"500px"}>
      <div>
        <img 
        alt =""
        style={{ width: 350}}
        src={image3}/>
      </div>
      </Col>
      
      <Col flex="auto"  >
      <div >
      <p style={{color:'#F1F1F1'}}>1</p>
      <p style={{color:'#F1F1F1'}}>1</p>
      <Title level={2}><div style={{textAlign: 'left'}}>Dr Sarah Rouse</div></Title>
      <p style={{color:'#F1F1F1'}}>1</p>
      
    

      <div style={{fontSize: '18px',textAlign: 'left'}}>Imperial College London</div>
      <p style={{color:'#F1F1F1'}}>1</p>
      <div style={{fontSize: '18px',textAlign: 'left'}}>Department of Life Science</div>
      <p style={{color:'#F1F1F1'}}>1</p>
      <div style={{fontSize: '18px',textAlign: 'left'}}>Level 5, Sir Ernst Chain Building</div>
      <p style={{color:'#F1F1F1'}}>1</p>
      <div style={{fontSize: '18px',textAlign: 'left'}}>South Kensington, SW7 2AZ</div>
      <p style={{color:'#F1F1F1'}}>1</p>
      <div style={{fontSize: '18px',textAlign: 'left'}}>London, United Kingdom</div>
      <p style={{color:'#F1F1F1'}}>1</p>
      <div style={{fontSize: '18px',textAlign: 'left'}}>
        <Text underline><a href="mailto:s.rouse@imperial.ac.uk">s.rouse@imperial.ac.uk</a></Text>
      </div>

      </div>
      </Col>

    </Row>
    </div>
    <p style={{color:'#F1F1F1'}}>1</p>
    <p style={{color:'#F1F1F1'}}>1</p>
    <p style={{color:'#F1F1F1'}}>1</p>
    <Row>
      <Col flex={3}></Col>
      <Col flex={2}></Col>
      <Col flex={1}>
        <div className='img1'>
          <img alt=""
          style={{width: 200}}
          src={image1}/>
        </div>

      </Col>
      <Col flex={1}>
        <div className='img2'>
            <img 
            alt=""
            style={{width: 180}}
            src={image2}/>
          </div>
      </Col>
      <Col flex={3}></Col>
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

)}

export default ContactPage
