
// date fns
import { Col, Row, Typography } from 'antd';

import './people.css'

const { Text,Title, Link  } = Typography;

const WorkoutDetails3 = ({ people }) => {
  

  


  if (people.identifier ==="3"){
  return ( 
    
    <div className="workout-details2">
    
    <Row>


      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
      <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 5 }}>
      <div >
        <p style={{color:'#FFF' ,fontSize:'1px'}}>1</p>
        <img 
        alt=""
        src={people.selectedFile}/>
      </div>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 1 }} md={{ span: 1 }}>
        <p style={{color:'#FFF'}}>1</p>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 18 }}>
      <Title level={3}><div style={{textAlign: 'left'}}>{people.name}</div></Title>
      
      
      <div style={{fontSize: '16px',textAlign: 'left'}}>
      {people.role}
      </div>
      <p style={{color:'#FFF'}}>1</p>

      <div style={{fontSize: '16px',textAlign: 'left'}}>
      {people.affiliation}
      </div>

      <p style={{color:'#FFF'}}>1</p>

      <div style={{fontSize: '16px',textAlign: 'left'}}>
      {people.description}
      </div>

      <p style={{color:'#FFF'}}>1</p>

      <div style={{fontSize: '16px',textAlign: 'left'}}>Email me:  
      <Text>  </Text>
      <Text underline><Link href={'mailto:' + people.email}>{people.email}</Link></Text>
      </div>
      </Col>
      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }}></Col>
    </Row>   
    </div>
  )}
}

export default WorkoutDetails3