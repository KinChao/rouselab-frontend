import { useWorkoutsContext } from '../../hooks/useWorkoutsContext2'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Col, Divider, Row, Typography } from 'antd';
import './news.css'

const { Text,Title, Link  } = Typography;

const WorkoutDetails = ({ news }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/newss/' + news._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }


  
  return ( 
    
    <div className="workout-details3">
    
    <Row wrap={false}>


      <Col flex="150px">
      
      <div>
        <img 
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