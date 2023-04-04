import './HeaderFromula.scss'
import video from '../../assets/video/Hero-desktop.310b79d6.mp4'
import logo from '../../assets/images/logo.png'
import arow from '../../assets/images/doubleArrow.png'
// import about from '../../assets/images/About.jpg'
import aboutRow from '../../assets/images/aboutRow.png';
import car from '../../assets/images/About_mobile_car.png'
import icon1 from '../../assets/images/icon-1.png';
import icon2 from '../../assets/images/icon-2.png';
import icon3 from '../../assets/images/icon-3.png';
import icon4 from '../../assets/images/icon-4.png';


const HeaderFormula = () => {
    return (
        <>
            <div className='header-container'>
                <div className='header-content'>
                    <div className='video-header'>
                        <video className='video' autoPlay muted loop
                            src={video} type="video/mp4"></video>
                    </div>
                    <div className='logo-content'>
                        <img src={logo} />
                    </div>
                    <div className='arow-content'>
                        <img className='arow-logo' src={arow} />
                        <div className='title-content'>
                            <h3 className='title-1'>WELCOME TO THE</h3>
                            <h2 className='title-2'>PLAY AND EARN</h2>
                            <h3 className='title-3'>METAVERSE</h3>
                        </div>

                    </div>
                    { /* Responsive*/}
                    {/* <div className='content-icon'>
                        <div className='view-img-icon'>
                            <img className='img-icon' src={icon1} />
                        </div>
                        <div className='view-img-icon'>
                            <img className='img-icon' src={icon2} />
                        </div>
                        <div className='view-img-icon'>
                            <img className='img-icon' src={icon3} />
                        </div>
                        <div className='view-img-icon'>
                            <img className='img-icon' src={icon4} />
                        </div>

                    </div> */}
                </div>



            </div>




            <div className='about-container-header'>
                <div className='about-content'>
                    <div className='view-about-content'>
                        {/* <img className='img-about-content' src={about} /> */}
                        <div className='about-right-content'>
                            <img className='img-about-rectangle' src={aboutRow} />
                            <div className='flex-collum'>
                                <h5 className='title-about-1'>Built on Blockchain</h5>
                                <h3 className='title-about-2'>The Official</h3>
                                <h3 className='title-about-2'>Formula E Game</h3>

                                <div>
                                    <p className='text-title-1'>“Formula E: High Voltage” is an official Formula E blockchain racing game, leveraging NFTs to introduce a new REVV Motorsport Play-and-Earn experience.</p>
                                    <p className='text-title-1'>Players take the role of a Team Principal, making strategic decisions that will critically affect the outcome of your championship journey.</p>
                                </div>
                            </div>

                        </div>





                        <div className='about-right-responsive'>
                            {/* <img className='img-about-rectangle' src={car} /> */}


                        </div>


                    </div>

                </div>
            </div>


        </>

    )
}

export default HeaderFormula;

