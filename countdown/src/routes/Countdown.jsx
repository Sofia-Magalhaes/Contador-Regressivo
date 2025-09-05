import Title from '../components/Title'
import Counter from '../components/Counter'
import { Navigate } from 'react-router-dom'

import { useContext } from 'react'

import useCountdown from '../hook/useCountdown'

import { CountdownContext } from '../context/CountDownContext'


const Countdown = () => {
    const { event } = useContext(CountdownContext)

    if (!event) return <Navigate to="/" />

    const eventTitle = event.title
    const eventColour = event.colour

    const [day, hour, minute, second] = useCountdown(event.date)

    return (
        <>
            <Title title={eventTitle} eventColour={eventColour}/>
            <div className="countdown-container">
                <Counter title="Dias" number={day} eventColour={eventColour} />
                <Counter title="Horas" number={hour} eventColour={eventColour} />
                <Counter title="Minutos" number={minute} eventColour={eventColour} />
                <Counter title="Segundos" number={second} eventColour={eventColour} />
            </div>
        </>
    )
}

export default Countdown