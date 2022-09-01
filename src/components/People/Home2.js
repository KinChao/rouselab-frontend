import { useEffect } from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"

// components
import WorkoutDetails_2 from "./WorkoutDetails_2"
import WorkoutDetails2_2 from "./WorkoutDetails2_2"
import WorkoutDetails3_2 from "./WorkoutDetails3_2"
import WorkoutForm from "./WorkoutForm"
import WorkoutForm2 from "./WorkoutForm2"
import WorkoutForm3 from "./WorkoutForm3"

const Home2 = () => {
  const { peoples, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/peoples')
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
        <WorkoutDetails_2 people={people} key={people._id} />
      ))}
    </div>
    <WorkoutForm />
  </div>

  <div className="home">
  <div className="workouts">
    {peoples && peoples.map(people => (
      <WorkoutDetails2_2 people={people} key={people._id} />
    ))}
  </div>
  <WorkoutForm2 />
  </div>

  <div className="home">
  <div className="workouts">
    {peoples && peoples.map(people => (
      <WorkoutDetails3_2 people={people} key={people._id} />
    ))}
  </div>
  <WorkoutForm3 />
  </div></>


  )
}

export default Home2