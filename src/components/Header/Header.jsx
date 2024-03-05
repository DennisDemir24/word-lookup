import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo-text'>Word-lookup</h1>
      <div className='link-wrapper'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link add-button' to='/word/add-word'>
          + Add Word
        </Link>
      </div>
    </header>
  )
}

export default Header