import videobg from '../assert/main.mp4';
function HomeContent(){
    return(
        <div className='home-content'>
            <video src={videobg} autoPlay loop muted className='home-video' />
            <h1>INFRASTRUCTURE & MARINE WORKS</h1>        
        </div>
    );
}
export default HomeContent;