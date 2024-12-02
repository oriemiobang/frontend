import {useEffect, useState} from 'react'

import WorkOutDetail from '../components/WorkOutDetail'
import WorkoutForm from '../components/WorkoutForm'

const Home = ()=>{
    const [workouts, setWorkouts] = useState(null)

    useEffect(()=>{
        const fectchWorkouts = async ()=>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)

            }

        }
        fectchWorkouts()

    },[])



    return ( <>
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((workout)=>(
                <WorkOutDetail key={workout._id} workout={workout}/>
            ))}
        </div>

        <WorkoutForm/>

    </div>

    </>);
}

export default Home;