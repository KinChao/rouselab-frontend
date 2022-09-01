import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        newss: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        newss: [action.payload, ...state.newss] 
      }
    case 'DELETE_WORKOUT':
      return { 
        newss: state.newss.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const WorkoutsContextProvider2 = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    newss: null
  })
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}