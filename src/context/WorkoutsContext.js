import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        peoples: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        peoples: [action.payload, ...state.peoples] 
      }
    case 'DELETE_WORKOUT':
      return { 
        peoples: state.peoples.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    peoples: null
  })
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}