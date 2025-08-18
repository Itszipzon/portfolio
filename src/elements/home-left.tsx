import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/home-left.css';
import { faCakeCandles, faEnvelope, faLocationDot, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function HomeLeft() {
  return (
    <div className="home-left">
      <div className='picture'>
        <img src="*" alt="profilepicture" />
        <h1>Rune Molander</h1>
      </div>
      <div className='separator' />
      <div className='home-left-detail-container'>
        <div className='home-left-detail'>
          <FontAwesomeIcon icon={faCakeCandles} />
          <span>Birthday:</span>
          <p>29.04.2000</p>
        </div>
        <div className='home-left-detail'>
          <FontAwesomeIcon icon={faMobileAlt} />
          <span>Phone:</span>
          <p>+47 474 62 030</p>
        </div>
        <div className='home-left-detail'>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email:</span>
          <p>Rune.molander@hotmail.com</p>
        </div>
        <div className='home-left-detail'>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Located:</span>
          <p>Trondheim, Norway</p>
        </div>

      </div>
    </div>
  );

}

export default HomeLeft;