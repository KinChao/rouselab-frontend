import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"



// components
import WorkoutDetails_m from "./WorkoutDetails_m"
import WorkoutDetails2_m from "./WorkoutDetails2_m"
import WorkoutDetails3_m from "./WorkoutDetails3_m"

const Home = () => {
  const { peoples, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://rouselab.herokuapp.com/api/peoples')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div >
      <div>
        {peoples && peoples.map(people => (
          <WorkoutDetails_m people={people} key={people._id} />
        ))}
      </div>
      <div >
        {peoples && peoples.map(people => (
          <WorkoutDetails2_m people={people} key={people._id} />
        ))}
      </div>
      <div>
        {peoples && peoples.map(people => (
          <WorkoutDetails3_m people={people} key={people._id} />
        ))}
      </div>

    </div>

    
  )
}

export default Home