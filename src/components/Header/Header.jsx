import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo-text'>Word-lookup</h1>
      <div className='link-wrapper'>
        <a className='link' href='/'>
          Home
        </a>
        <a className='link' href='/word/add-word'>
          Add Word
        </a>
      </div>
    </header>
  )
}

export default Header