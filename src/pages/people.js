import {  Link} from 'react-router-dom'
import { Typography,Layout, Menu  } from 'antd'

import './people.css'

// pages & components
import Home from '../components/People/Home'



const { Title } = Typography;
const { Header, Content, Footer } = Layout;


function PeoplePage() {

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
      style={{background: '#F1F1F1', }}
      mode="horizontal">
      <Menu.Item><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item><Link to='/Publication'>Publication</Link></Menu.Item>
      <Menu.Item><Link to='/People'>People</Link></Menu.Item>
      <Menu.Item><Link to='/News'>News</Link></Menu.Item>
      <Menu.Item><Link to='/Contact'>Contact</Link></Menu.Item>
    </Menu>

    <p style={{color:'#F1F1F1'}}>1</p>
    <p style={{color:'#F1F1F1', fontSize:'3px'}}>1</p>

    <div className='left4'><Home /></div>
    
    </Content>

    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      ©2022 ROUSELAB
    </Footer>
  </Layout>
  )
}

export default PeoplePage;