import '../styles/Header.css';
import logo from '../images/captura.png'
import HomeButton from './buttons/HomeButton';
import ReturnButton from './buttons/ReturnButton';

const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} width="50px" />
      <img className='palomitas' src='https://cdn-icons-png.flaticon.com/512/3507/3507102.png' />
      <div className='btnHeader'>
       <HomeButton />
      <ReturnButton />
      </div>
    </header>)
}

export default Header;


