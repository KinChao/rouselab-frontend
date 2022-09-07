import React, { useState } from 'react';

import { Anchor, Drawer, Button} from 'antd';

import './header.css'

import { Link } from 'react-router-dom'



function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div>
          
        <div className="titleHolder2">
          <h2 style={{fontSize:'28px'}}><Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>RouseLab</Link></h2>
        </div>


        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65" affix={false}>
            <Link className='link1' to='/'>Home</Link>
            <Link className='link1' to='/Publication'>Publication</Link>
            <Link className='link1' to='/People'>People</Link>
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
              <p><Link className='link1' to='/'>Home</Link></p>
              <p><Link className='link1' to='/Publication'>Publication</Link></p>
              <p><Link className='link1' to='/People'>People</Link></p>
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