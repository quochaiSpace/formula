import './AboutFormula.scss';

import bg from '../../assets/images/bg-about.jpg';
import bg2 from '../../assets/images/bg-2.png';
import arow from '../../assets/images/aboutRow.png';
import bg3 from '../../assets/images/bg-about-2.jpg';
import bgCar from '../../assets/images/car-about.png'
import aution from '../../assets/images/Auction.png';
import imgBtn from '../../assets/images/img-btn.png';

const AboutFormula = () => {
    return (
        <>
            <div className="about-container">
                <div className='content'>
                    {/* <img className='img-about' src={bg} /> */}
                    <img className='img-about2' src={bg2} />


                    <div className='content-right'>
                        <div className='right-body'>
                            <img className='img-arow' src={arow} />
                            <div className='view-text-title'>
                                <h3 className='text-1'>THE REVV MOTORSPORT METAVERSE</h3>
                            </div>

                        </div>
                        <div className='view-img-about-responsive'>
                            <img className='img-about-responsive' src={bg2} />
                        </div>

                        <div className='view-text-2-responsive'>
                            <p className='text-2'>“Formula E: High Voltage” lives within the REVV Motorsport ecosystem and is powered by the REVV Token. Across the entire ecosystem, your collection is always being recognised, as well as your performance, records and progress</p>
                        </div>


                        <h3 className='text-3-revv'>REVV TOKENS</h3>


                        <div className='view-text-2-responsive'>
                            <p className='text-2'>The REVV Token remains the primary currency used to purchase assets within the ecosystem, as well as a key prize for winning tournaments and events.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='about-container-2'>
                <div className='content-2'>

                    <div className='content-text'>
                        <span className='text-1'>The auction for the First Edition cars has ended</span>
                        <div className='content-text-2'>
                            <span className='text-2'>with a total sales of</span>

                            <div className='view-BNB'>
                                <img className='img-aution' src={aution} />

                                <span className='text-3'>292.05</span>
                                <span className='text-2'>BNB</span>

                            </div>


                        </div>

                        <div className='view-btn'>
                            <button className='text-btn'>View Card
                                <img className='img-btn' src={imgBtn} />
                            </button>

                        </div>

                    </div>

                    <div className='content-car'>
                        <img className='img-car' src={bgCar} />
                    </div>




                </div>

            </div>
        </>
    )

}

export default AboutFormula;