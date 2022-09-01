import { Card, Form, Input, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';

const PublicationPage = () => {
  const { Title } = Typography;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
    
    <div>
      <Header
        
        style={{
          padding: 12,       
          background: '#abc',
        }}
      >
      
      <Title level={2} style={{ marginLeft: 15}}>abc Ant Design</Title>

      </Header>
    </div>

    <Content
    
      className="site-layout"

    >

    <Menu 
      
      
      style={{background: '#aaa', }}
      mode="horizontal">
      
      <Menu.Item><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item><Link to='/Publication'>Publication</Link></Menu.Item>
      <Menu.Item><Link to='/People'>People</Link></Menu.Item>
      <Menu.Item><Link to='/News'>News</Link></Menu.Item>
      <Menu.Item><Link to='/Contact'>Contact</Link></Menu.Item>
 
    </Menu>;


      <div
        
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        Content
      </div>
    </Content>



    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  )
}

export default PublicationPage