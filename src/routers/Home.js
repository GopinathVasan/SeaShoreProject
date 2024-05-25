import videobg from '../assert/video1.mp4';
import "../css/HomeStyle.css";
import ChooseUs from '../homecomponent/ChooseUs.js';
import HomeContact from '../homecomponent/HomeContact.js';
import HomeContent from '../homecomponent/HomeContent.js';
import WelcomeTo from '../homecomponent/WelcomeTo.js';
function Home() {
    return(
    <div className='home-container'>
    <video src={videobg} autoPlay loop muted className='home-video' />
    <HomeContent/>
    <HomeContact/>
    <WelcomeTo/>
    <ChooseUs/>
    </div>);
}
export default Home;

