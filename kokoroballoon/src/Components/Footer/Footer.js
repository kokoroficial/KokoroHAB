import './Footer.css';
import cdmx from '../../Resources/logoSpaceAppsCDMX.svg';
import ig from '../../Resources/IconInstagram.svg';
import tw from '../../Resources/IconTwitter.svg';
import yt from '../../Resources/IconYoutube.svg';
export const Footer = () => {
    return (
        <footer className="footer">
            <div className='containerImage'>
                <img className='image' src={cdmx} />
            </div>
            <div className="content">
                <ul>
                    <li className='font'><strong><u>Help</u></strong></li>
                    <li><a href='#' className='font'>FAQs</a></li>
                    <li><a href='#' className='font'>Support</a></li>
                    <li><a href='#' className='font'>Contact</a></li>
                </ul>
            </div>

            <div className="content" >
                <ul>
                    <li className='font'><strong><u>Follow Us</u></strong></li>
                    <li className='flexrow'>
                        <img src={ig} height={20} width={20} />
                        <a href='#' className='separatorSocialMedia font'> Instagram</a>
                    </li>
                    <li className='flexrow'>
                        <img src={tw} height={20} width={20} />
                        <a href='#' className='separatorSocialMedia font'>Twitter</a>
                    </li>
                    <li className='flexrow'>
                        <img src={yt} height={20} width={20} />
                        <a href='#' className='separatorSocialMedia font'>Youtube</a>
                    </li>
                </ul>
            </div>

            <div className="content">
                <ul>
                    <li className='font'><strong><u>Kokoro Balloons</u></strong></li>
                    <li>
                        <p className='font'>
                            Crea y participa de
                            <br />
                            increibles experiencias
                            <br />
                            mientras juegas
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};