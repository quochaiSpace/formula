import './Experience.scss'
import bg from '../../assets/images/bg-experience.jpg';
import arow from '../../assets/images/arrowkey.png'
import card1 from '../../assets/images/card-1.jpg';
import arowbottom from '../../assets/images/carebottom.png'
import card2 from '../../assets/images/whell.jpg';
import card3 from '../../assets/images/card-2.jpg'
import bg2 from '../../assets/images/bg-experience2.jpg';
import card4 from '../../assets/images/card-3.jpg';
import card5 from '../../assets/images/card-4.jpg';
import card6 from '../../assets/images/card-5.jpg';

import section1 from '../../assets/images/section1.png';


const Experience = () => {
    return (
        <>
            {/* The Experience 1*/}
            <div className="Experience-container">
                <div className='Experience-content' >
                    {/* <img className='img-experience' src={bg} /> */}

                    <div className='the-experience'>
                        <img className='img-arow' src={arow} />
                        <div className='flex-colum'>
                            <h5 className='title-1'>The Experience</h5>
                            <h3 className='title-2'>KEY FEATURES</h3>
                        </div>
                    </div>


                    {/* section 1 */}
                    <div className='feature-cards'>

                        <div className='section-content-1'>
                            <img className='img-card-1' src={card1} />

                            <h1 className='text-01'> 01.</h1>

                            <span className='view-text-title'>
                                <h6 className='text-02'>Build & Develop your own Formula E Team</h6>
                            </span>

                            <div className='bg-bottom'>
                                <img className='img-bottom' src={arowbottom} />

                                <span className='view-text-title-bottom'>
                                    <p className='text-bottom'>Be the Team Principal, strategically decide how you want to develop your own Formula E Team.</p>
                                </span>
                            </div>
                        </div>

                        {/* section 2 */}
                        <div className='section-content-2'>
                            <img className='img-card-1' src={card2} />

                            <h1 className='text-01'> 02.</h1>

                            <span className='view-text-title'>
                                <h6 className='text-02'>Play. Earn. Upgrade. Create.</h6>
                            </span>

                            <div className='bg-bottom'>
                                <img className='img-bottom' src={arowbottom} />

                                <span className='view-text-title-bottom'>
                                    <p className='text-bottom'>Play-and-Earn is simple. What you earn through play can be used to enhance your assets in the form of currencies and NFTs. The more you play, the more options you have to advance.</p>
                                </span>
                            </div>
                        </div>



                        {/* section 3 */}
                        <div className='section-content-3'>
                            <img className='img-card-1' src={card3} />


                            <h1 className='text-01'> 03.</h1>

                            <span className='view-text-title'>
                                <h6 className='text-02'>Skill System</h6>
                            </span>

                            <div className='bg-bottom'>
                                <img className='img-bottom' src={arowbottom} />

                                <span className='view-text-title-bottom'>
                                    <p className='text-bottom'>Be the Team Principal, strategically decide how you want to develop your own Formula E Team.</p>
                                </span>
                            </div>
                        </div>

                    </div>




                    {/* Crop photo */}
                    {/* <div className='section-container'>
                        <div className='section-content'>
                            <img className='img-section-1' src={section1} />
                            <img className='img-section-1' src={section1} />
                            <img className='img-section-1' src={section1} />
                        </div>
                    </div> */}


                </div>


            </div>




            {/* The Experience 2*/}
            <div className='Experience-container-2'>
                <div className='Experience-content-2'>
                    {/* <img className='img-experience-2' src={bg2} /> */}

                    <div className='the-experience'>
                        <img className='img-arow' src={arow} />
                        <div className='flex-colum'>
                            <h5 className='title-1'>The Experience</h5>
                            <h3 className='title-2'>KEY FEATURES</h3>
                        </div>
                    </div>


                    <div className='feature-cards-2'>
                        {/* section 4 */}
                        <div className='section-content-4'>
                            <img className='img-card-1' src={card4} />

                            <h1 className='text-01'> 04.</h1>

                            <span className='view-text-title'>
                                <h6 className='text-02'>Race across exquisite cities & circuits</h6>
                            </span>

                            <div className='bg-bottom'>
                                <img className='img-bottom' src={arowbottom} />

                                <span className='view-text-title-bottom'>
                                    <p className='text-bottom'>You will be able to practice, qualify & race in E-Prix across the most iconic locations across the globe.</p>
                                </span>
                            </div>
                        </div>

                        {/* section 5 */}
                        <div className='section-content-5'>
                            <img className='img-card-1' src={card5} />
                            <h1 className='text-01'> 05.</h1>

                            <span className='view-text-title'>
                                <h6 className='text-02'>Attack Mode and Energy Management</h6>
                            </span>

                            <div className='bg-bottom'>
                                <img className='img-bottom' src={arowbottom} />

                                <span className='view-text-title-bottom'>
                                    <p className='text-bottom'>Attack Mode and Energy Management are the key to victory. Every race has different rules in how you can use Attack Mode - master each circuit.</p>
                                </span>
                            </div>
                        </div>


                        {/* section 6 */}
                        <div className='section-content-6'>
                            <img className='img-card-1' src={card6} />

                            <h1 className='text-01'> 06.</h1>

                            <span className='view-text-title'>
                                <h6 className='text-02'>Own, Sell and Trade your NFT Collectibles</h6>
                            </span>

                            <div className='bg-bottom'>
                                <img className='img-bottom' src={arowbottom} />

                                <span className='view-text-title-bottom'>
                                    <p className='text-bottom'>Be the Team Principal, strategically decide how you want to develop your own Formula E Team.</p>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Experience;