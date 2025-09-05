import './Title.css'

const Title = ({title, eventColour}) => {
  return (
    <h1 className="title" style={{color: eventColour}}>
      {title}
    </h1>
  )
}

export default Title