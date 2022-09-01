import { useWorkoutsContext } from '../../hooks/useWorkoutsContext2'
// date fns
import { Col, Row, Typography } from 'antd';
import './news.css'

const { Title } = Typography;

const WorkoutDetails_2 = ({ news }) => {
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
        alt=""
        style={{height: 150, width: 159}}
        src={news.photo}/>
      </div>
      </Col>

      <Col flex="auto" >
      <Title level={2}><div style={{textAlign: 'left'}} className='left5'>{news.title}</div></Title>


      <div style={{fontSize: '16px',textAlign: 'left'}} className='left5'>
      {news.description}
      </div>
      <p style={{color:'#F1F1F1'}}>1</p>


      </Col>
      </Row>   

      


      <span className="material-symbols-outlined span2" onClick={handleClick}>delete</span>
    </div>
  )}
  

export default WorkoutDetails_2