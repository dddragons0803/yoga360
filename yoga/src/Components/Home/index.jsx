// home.js

import './home.css';
import backgroundImage from '../../assets/yoga_pose-3.webp';
import Navbar from '../Navbar';
// import HamburgerMenu from '../HamburgerMenu';
import SecondHome from '../SecondHome';
const Home = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [windowWidth]);



  return (
    <div className='home-Main'>
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* {windowWidth < 768 ? <HamburgerMenu /> : <Navbar />} */}
      <Navbar />
      <div className='start'>
        <h1><b> Embark on a Transformative Yoga Journey with Ram Panwar, PhD Candidate and Yoga Master! </b></h1>
      </div>

      <div className="content">
        <p><b>Namaste! I am Ram Panwar, a dedicated Yoga enthusiast on a profound journey of both self-discovery and academic exploration. With a passion deeply rooted in the philosophy of Yoga, I am not only a Master in this ancient art but also a fervent pursuer of knowledge, currently undertaking a PhD in Yoga</b></p>
        <div className='btnn'>
          <button><a href='https://youtube.com/channel/UC8UzusZmA81HEBYRwybQzbg'>Subscribe Me</a></button>
          <button><a href='https://www.facebook.com/yogalive360/'>Connect++</a> </button>
        </div>
      </div>
     
    </div>
    <div className='secondhome'>
    <SecondHome />
    </div>
    </div>
  );
};

export default Home;
