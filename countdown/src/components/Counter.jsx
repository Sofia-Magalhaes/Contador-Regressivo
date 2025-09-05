import './Counter.css'

const Counter = ({ title, number, eventColour }) => {
    return (
        <div className='counter'>
            <p className="counter-number" style={{backgroundColor: eventColour}}>{number}</p>
            <h3 className="counter-text" style={{color: eventColour}}>{title}</h3>
        </div>
    )
}

export default Counter