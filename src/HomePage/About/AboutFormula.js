import './AboutFormula.scss';

import bg from '../../assets/images/bg-about.jpg';
import bg2 from '../../assets/images/bg-2.png';
import arow from '../../assets/images/aboutRow.png';
import bg3 from '../../assets/images/bg-about-2.jpg';

const AboutFormula = () => {
    return (
        <>
            <div className="about-container">
                <div className='content'>
                    <img className='img-about' src={bg} />
                    <img className='img-about2' src={bg2} />


                    <div className='content-right'>
                        <div className='right-body'>
                            <img className='img-arow' src={arow} />
                            <h3 className='text-1'>THE REVV MOTORSPORT METAVERSE</h3>
                        </div>

                        <p className='text-2'>“Formula E: High Voltage” lives within the REVV Motorsport ecosystem and is powered by the REVV Token. Across the entire ecosystem, your collection is always being recognised, as well as your performance, records and progress.REVV</p>

                        <h3 className='text-3'>REVV TOKENS</h3>

                        <p className='text-2'>The REVV Token remains the primary currency used to purchase assets within the ecosystem, as well as a key prize for winning tournaments and events.</p>
                    </div>
                </div>

            </div>

            <div className='about-container-2'>
                <div className='content-2'>
                    <img className='img-about-3' src={bg3} />

                    <p>AAAAAAAAAAAAAAAAaa</p>
                </div>
            </div>
        </>
    )

}

export default AboutFormula;