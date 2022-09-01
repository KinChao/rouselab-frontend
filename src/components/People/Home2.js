import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"

// components
import WorkoutDetails02 from "./WorkoutDetails02"
import WorkoutDetails202 from "./WorkoutDetails202"
import WorkoutDetails302 from "./WorkoutDetails302"
import WorkoutForm from "./WorkoutForm"
import WorkoutForm2 from "./WorkoutForm2"
import WorkoutForm3 from "./WorkoutForm3"

const Home2 = () => {
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
    <><div className="home">
    <div className="workouts">
      {peoples && peoples.map(people => (
        <WorkoutDetails02 people={people} key={people._id} />
      ))}
    </div>
    <WorkoutForm />
  </div>

  <div className="home">
  <div className="workouts">
    {peoples && peoples.map(people => (
      <WorkoutDetails202 people={people} key={people._id} />
    ))}
  </div>
  <WorkoutForm2 />
  </div>

  <div className="home">
  <div className="workouts">
    {peoples && peoples.map(people => (
      <WorkoutDetails302 people={people} key={people._id} />
    ))}
  </div>
  <WorkoutForm3 />
  </div></>


  )
}

export default Home2