import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Col, Divider, Row, Typography } from 'antd';
import './people.css'

const { Text,Title, Link  } = Typography;

const WorkoutDetails3 = ({ people }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/peoples/' + people._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }


  if (people.identifier =="3"){
  return ( 
    
    <div className="workout-details2">
    
    <Row wrap={false}>


      <Col flex="300px">
      
      <div>
        <img 
        style={{height: 250, width: 250}}
        src={people.selectedFile}/>
      </div>
      </Col>

      <Col flex="auto" >
      <Title level={3}><div style={{textAlign: 'left'}}>{people.name}</div></Title>

      
      <div style={{fontSize: '16px',textAlign: 'left'}}>
      {people.role}
      </div>
      <p style={{color:'#F1F1F1'}}>1</p>

      <div style={{fontSize: '16px',textAlign: 'left'}}>
      {people.affiliation}
      </div>

      <p style={{color:'#F1F1F1'}}>1</p>

      <div style={{fontSize: '16px',textAlign: 'left'}}>
      {people.description}
      </div>

      <p style={{color:'#F1F1F1'}}>1</p>

      <div style={{fontSize: '16px',textAlign: 'left'}}>Email me:
      <Text>  </Text>
      <Text underline><Link href="mailto:s.rouse@imperial.ac.uk">{people.email}</Link></Text>
      </div>
      </Col>
    </Row>   
    </div>
  )}
}

export default WorkoutDetails3