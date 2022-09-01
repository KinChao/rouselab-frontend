import React from 'react'
import Navbar from './Navbar';
import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext2"
import WorkoutForm from './WorkoutForm';
import WorkoutDetails02 from './WorkoutDetails02';

const Admin2Page = () => {
  const { newss, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://rouselab.herokuapp.com/api/newss')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])
  
  return ( 
    
    <div>
      <Navbar />
      <div className="home">
      <div className="workouts">
      {newss && newss.map(news => (
        <WorkoutDetails02 news={news} key={news._id} />
      ))}

      </div>
      <WorkoutForm />
      </div>

 
    </div>
   );
}
 
export default Admin2Page;
