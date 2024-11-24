import GlobeIcon from '../assets/Globe.svg';
import './Header.css';
function Header() {
  return (
    <header>
      <nav>
        <img src={GlobeIcon} alt="globe icon" />
        <p>my travel journal.</p>
      </nav>
    </header>
  );
}

export default Header;
