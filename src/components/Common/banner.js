import React from 'react';
import banner from './banner6.png'
import {Row, Col} from 'antd'


function Banner () {

  return (
  <Row>
    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24}}>
      <div>
        <img alt=""
        
        src={banner}/>
      </div>
    </Col>
  </Row>
  );
}

export default Banner;