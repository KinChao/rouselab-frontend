
// date fns

import { Col, Row, Typography } from 'antd';
import './news.css'

const { Title  } = Typography;

const WorkoutDetailsm = ({ news }) => {
  

  

  
  return ( 
    
    <div className="workout-details33">
    
    <Row>

      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
      <Col xs={{ span: 12 }} sm={{ span: 2 }} md={{ span: 2 }}>
      <div >
        
        <img 
        alt=""
        
        src={news.photo}/>
      </div>
      </Col>
      <Col xs={{ span: 12 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>

      <Col xs={{ span: 24 }} sm={{ span: 22 }} md={{ span: 22 }}>
      <Title level={5}><div style={{textAlign: 'left'}} className='left555'>{news.title}</div></Title>

      
      <div style={{fontSize: '13px',textAlign: 'left'}} className='left555'>
      {news.description}
      </div>


      
      </Col>
    </Row>   
    </div>
  )
}

export default WorkoutDetailsm