import './Title.css'

const Title = ({ title, eventColour }) => {
  return (
    <div>
      <h1 className="title" style={{ color: eventColour }}>
        {title}
        <p>Falta</p>
      </h1>
    </div>
  )
}

export default Title