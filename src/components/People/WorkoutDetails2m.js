
// date fns
import { Col, Row, Typography } from 'antd';

import './people.css'

const { Text,Title, Link  } = Typography;

const WorkoutDetails2m = ({ people }) => {
  
  

  


  if (people.identifier ==="2"){
  return ( 
    
    <div className="workout-details3">
    
    <Row>


      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
      <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 5 }}>
      <div >
        
        <img 
        alt=""
        src={people.selectedFile}/>
      </div>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 1 }} md={{ span: 1 }}>
        
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 18 }}>
      <Title level={4}><div style={{textAlign: 'left'}}>{people.name}</div></Title>
      
      
      <div style={{fontSize: '14px',textAlign: 'left', marginBottom:'10px'}}>
      {people.role}
      </div>
      

      <div style={{fontSize: '14px',textAlign: 'left', marginBottom:'10px'}}>
      {people.affiliation}
      </div>

      

      <div style={{fontSize: '14px',textAlign: 'left', marginBottom:'10px'}}>
      {people.description}
      </div>

      

      <div style={{fontSize: '14px',textAlign: 'left'}}>Email me:  
      <Text>  </Text>
      
      <Text underline><Link href={'mailto:' + people.email}>{people.email}</Link></Text>
      </div>
      </Col>
      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
    </Row>   
    </div>
  )}
}

export default WorkoutDetails2m