import './Footer.scss'
import revv from '../..//assets/images/revv-foter.png';
import amin from '../../assets/images/amin-footer.png';
import icon1 from '../../assets/images/icon-1.png';
import icon2 from '../../assets/images/icon-2.png';
import icon3 from '../../assets/images/icon-3.png';
import icon4 from '../../assets/images/icon-4.png';
const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className='view-text-title'>
                        <span className='text-title'>DON'T MISS THE LATEST NEWS!</span>
                    </div>



                    <div className='content-input'>
                        <input className='input' placeholder='Enter your email to subscribe'></input>
                        <button className='btn-sub'>Subscribe</button>

                    </div>

                    <div className='content-text'>

                        <input type='checkbox' className='input-check'></input>
                        <span className='text-p'>Permit Animoca to pass my email address to Formula E to recevice a Formula E newslester </span>

                    </div>

                </div>
            </div>



            <div className='footer-container-2'>
                <div className='footer-content-2'>
                    <div className='content-left'>

                        <img className='img-foter-right-revv' src={revv} />

                        <div className='view-img-foter'>
                            <img className='img-foter-right-amin' src={amin} />
                            <div className='view-text-right'>
                                <span className='text-foter-right'>Privacy Policy</span>
                            </div>
                        </div>


                    </div>

                    <div className='content-right'>
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


                    </div>
                </div>
                <div className='view-text-bottom'>
                    <span className='text-bottom-1'>Formula E: High Voltage</span>
                    <span className='text-bottom-2'>An official product of FIA FORMULA E WORLD CHAMPIONSHIP licensed by Formula E Operations, Limited.</span>
                    <span className='text-bottom-3'>Copyright © 2021 Formula E Operations, Limited. ™ FIA/Formula E Operations, Limited. FORMULA E, the FORMULA E logo, FIA FORMULA E WORLD CHAMPIONSHIP and FIA are trademarks of Fédération Internationale de l’Automobile (FIA). All rights reserved.</span>
                    <span className='text-bottom-3'>Copyright © 2021 ANIMOCA BRANDS LIMITED, ALL RIGHTS RESERVED</span>
                    <span className='text-bottom-3'>Copyright © 2021 Formula E Operations, Limited</span>
                </div>

            </div>
        </>
    )
}

export default Footer;