// import videobg from '../assert/main.mp4';
import "../css/HomeStyle.css";
import ChooseUs from '../homecomponent/ChooseUs.js';
import HomeContent from '../homecomponent/HomeContent.js';
import WelcomeTo from '../homecomponent/WelcomeTo.js';
function Home() {
    return(
    <div className='home-container' id="home1">
    {/* <video src={videobg} autoPlay loop muted className='home-video' /> */}
    <HomeContent/>
    <WelcomeTo/>
    <ChooseUs/>
    </div>);
}
export default Home;

