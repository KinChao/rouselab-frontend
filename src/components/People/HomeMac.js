import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"



// components
import WorkoutDetailsMac from "./WorkoutDetailsMac"
import WorkoutDetails2Mac from "./WorkoutDetails2Mac"
import WorkoutDetails3Mac from "./WorkoutDetails3Mac"

const HomeMac = () => {
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
          <WorkoutDetailsMac people={people} key={people._id} />
        ))}
      </div>
      <div >
        {peoples && peoples.map(people => (
          <WorkoutDetails2Mac people={people} key={people._id} />
        ))}
      </div>
      <div>
        {peoples && peoples.map(people => (
          <WorkoutDetails3Mac people={people} key={people._id} />
        ))}
      </div>

    </div>

    
  )
}

export default HomeMac