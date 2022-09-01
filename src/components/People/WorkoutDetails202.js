import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'
// date fns
import { Col, Row, Typography } from 'antd';

const { Text,Title } = Typography;

const WorkoutDetails202 = ({ people }) => {
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


  if (people.identifier ==="2"){
  return (
    
    
    <div className="workout-details">
       <Row wrap={false}>


<Col flex="300px">
<p style={{color:'#F1F1F1', fontSize:'5px'}}>1</p>
<div>
  <img 
  alt=""
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
<a href="mailto:s.rouse@imperial.ac.uk">{people.email}</a>
</div>
</Col>
</Row>   

      


    <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )}
  }

export default WorkoutDetails202