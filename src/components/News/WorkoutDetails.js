
// date fns

import { Col, Row, Typography } from 'antd';
import './news.css'

const { Title  } = Typography;

const WorkoutDetails = ({ news }) => {
  

  

  
  return ( 
    
    <div className="workout-details3">
    
    <Row>

      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
      <Col xs={{ span: 12 }} sm={{ span: 3 }} md={{ span: 2 }}>
      <div >
        
        <img 
        alt=""
        
        src={news.photo}/>
      </div>
      </Col>
      <Col xs={{ span: 12 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>

      <Col xs={{ span: 24 }} sm={{ span: 21 }} md={{ span: 22 }}>
      <Title level={3}><div style={{textAlign: 'left'}} className='left5'>{news.title}</div></Title>

      
      <div style={{fontSize: '16px',textAlign: 'left'}} className='left5'>
      {news.description}
      </div>
      <p style={{color:'#FFF'}}>1</p>

      
      </Col>
    </Row>   
    </div>
  )
}

export default WorkoutDetails