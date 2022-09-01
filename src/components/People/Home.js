import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "./WorkoutDetails"
import WorkoutDetails2 from "./WorkoutDetails2"
import WorkoutDetails3 from "./WorkoutDetails3"

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
          <WorkoutDetails people={people} key={people._id} />
        ))}
      </div>
      <div >
        {peoples && peoples.map(people => (
          <WorkoutDetails2 people={people} key={people._id} />
        ))}
      </div>
      <div>
        {peoples && peoples.map(people => (
          <WorkoutDetails3 people={people} key={people._id} />
        ))}
      </div>

    </div>

    
  )
}

export default Home