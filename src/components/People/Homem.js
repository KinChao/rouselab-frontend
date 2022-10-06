import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"



// components
import WorkoutDetailsm from "./WorkoutDetailsm"
import WorkoutDetails2m from "./WorkoutDetails2m"
import WorkoutDetails3m from "./WorkoutDetails3m"

const Homem = () => {
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
          <WorkoutDetailsm people={people} key={people._id} />
        ))}
      </div>
      <div >
        {peoples && peoples.map(people => (
          <WorkoutDetails2m people={people} key={people._id} />
        ))}
      </div>
      <div>
        {peoples && peoples.map(people => (
          <WorkoutDetails3m people={people} key={people._id} />
        ))}
      </div>

    </div>

    
  )
}

export default Homem