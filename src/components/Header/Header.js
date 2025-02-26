import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import monkeyIcon from '../../components/Header/monkey_icon.png';

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            <img src={monkeyIcon} alt="Logo" className='logo' />
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
