import { useState } from 'react'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext2'
import FileBase64 from 'react-file-base64'
import { Typography } from 'antd'
const { Title  } = Typography;



const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [photo, setPhoto] = useState('')
  const [emptyFields, setEmptyFields] = useState([])
  
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    
    
    const news = {title, description, photo}
    

    const response = await fetch('https://rouselab.herokuapp.com/api/newss/', {
      method: 'POST',
      body: JSON.stringify(news),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setDescription('')
      setPhoto('')
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <Title level={3}>Add a news</Title>
      

      <FileBase64
      multiple = {false}
      onDone = {({base64}) => setPhoto(base64)}/>

      <label>Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        
      />

      <label>Description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
        
      />

      <button>Add news</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm