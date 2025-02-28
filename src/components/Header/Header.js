import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import monkeyIcon from '../../components/Header/monkey_icon.png';
import monkeyGif from '../../components/Header/monkey.gif';

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            <img src={monkeyGif} alt="Logo" className='logo' />
            {/* <img src=""></img> */}
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
