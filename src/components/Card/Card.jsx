/* eslint-disable react/prop-types */
import './Card.css'

const Card = ({children}) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default Card