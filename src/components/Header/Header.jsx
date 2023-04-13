import './Header.css'

const Header = () => {
  return (
    <div className='header_main'>
        <nav className='header_nav'>
            <div>Logo</div>
            <div className='refs'>
               <a href="#about">About</a>
               <a href="">Experience</a>
               <a href="">Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Header