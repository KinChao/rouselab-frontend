
// date fns

import { Col, Row, Typography } from 'antd';
import './news.css'

const { Title  } = Typography;

const WorkoutDetails = ({ news }) => {
  

  

  
  return ( 
    
    <div className="workout-details3">
    
    <Row wrap={false}>


      <Col flex="150px">
      
      <div>
        <img 
        alt=""
        style={{height: 150, width: 150}}
        src={news.photo}/>
      </div>
      </Col>

      <Col flex="auto" >
      <Title level={3}><div style={{textAlign: 'left'}} className='left5'>{news.title}</div></Title>

      
      <div style={{fontSize: '16px',textAlign: 'left'}} className='left5'>
      {news.description}
      </div>
      <p style={{color:'#F1F1F1'}}>1</p>

      
      </Col>
    </Row>   
    </div>
  )
}

export default WorkoutDetails