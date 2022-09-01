import { useState } from 'react'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'
import FileBase64 from 'react-file-base64'
import { Typography } from 'antd'
const { Title  } = Typography;



const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [affiliation, setAffiliation] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [selectedFile, setSelectedFile] = useState('')
  const [emptyFields, setEmptyFields] = useState([])
  
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const identifier = "1"
    
    
    const people = {name, role, affiliation, description, email, identifier, selectedFile}
    

    const response = await fetch('/api/peoples', {
      method: 'POST',
      body: JSON.stringify(people),
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
      setName('')
      setRole('')
      setAffiliation('')
      setDescription('')
      setEmail('')
      setSelectedFile('')
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <Title level={3}>Add a new group leader</Title>
      

      <FileBase64
      multiple = {false}
      onDone = {({base64}) => setSelectedFile(base64)}/>
      <label>Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />

      <label>Role:</label>
      <input 
        type="text" 
        onChange={(e) => setRole(e.target.value)} 
        value={role}
        className={emptyFields.includes('role') ? 'error' : ''}
      />

      <label>Affiliation:</label>
      <input 
        type="text" 
        onChange={(e) => setAffiliation(e.target.value)} 
        value={affiliation}
        className={emptyFields.includes('affiliation') ? 'error' : ''}
      />

      <label>Description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <label>Email:</label>
      <input 
        type="text" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        className={emptyFields.includes('email') ? 'error' : ''}
      />

      <button>Add person</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm