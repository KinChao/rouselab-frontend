import React, { useState } from 'react';
import { Anchor, Drawer, Button} from 'antd';
import './header.css'
import { Link } from 'react-router-dom'
import protein from './t2_2.png'
import protein2 from './t1_2.png'
import {   Row } from 'antd'
import logo from './logo1.png'


function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="header">
        <div>
          
        <Row>
        
        <div className="titleHolder20">
          <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
            <img alt=""
            style={{width: 140, marginTop: '12px'}}
            src={logo}/>
          </Link>
        </div>
        <div style={{marginLeft:'5px', marginTop:'9px'}}>
        <img alt="" src={protein2} style={{width:'50px'}}/>
        </div>
        <div style={{marginLeft:'-6px', marginTop:'8px'}}>
        <img alt="" src={protein} style={{width:'55px'}}/>
        </div>
        </Row>




        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65" affix={false}>
            <Link className='link1' to='/Research'>Research</Link>
            <Link className='link1' to='/Publication'>Publications</Link>
            <Link className='link1' to='/People'>People</Link>
            <Link className='link1' to='/Projects'>Projects</Link>
            <Link className='link1' to='/Gallery'>Gallery</Link>
            <Link className='link1' to='/News'>News</Link>
            <Link className='link1' to='/Contact'>Contact</Link>
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65" affix={false}>
              <p><Link className='link1' to='/Research'>Research</Link></p>
              <p><Link className='link1' to='/Publication'>Publication</Link></p>
              <p><Link className='link1' to='/People'>People</Link></p>
              <p><Link className='link1' to='/Projects'>Projects</Link></p>
              <p><Link className='link1' to='/Gallery'>Gallery</Link></p>
              <p><Link className='link1' to='/News'>News</Link></p>
              <p><Link className='link1' to='/Contact'>Contact</Link></p>
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;