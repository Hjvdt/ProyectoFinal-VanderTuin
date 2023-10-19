import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__description">
                <img
                    src="../assets/icons/logo.png"
                    alt="Logo LaboLab"
                    className="logo-LaboLab"
                />
                <p className="footer-text">LaboLab srl</p>
            </div>
            <div className="footer__contact">
                <h3 className="footer-title">by HJVDT</h3>
                <ul className='contact__icons'>
                    <li><a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><FacebookOutlinedIcon/></a></li>
                    <li><a href='https://www.google.com/intl/es-419/gmail/about/' target='_blank' rel='noreferrer'><EmailIcon/></a></li>
                    <li><a href='https://github.com/' target='_blank' rel='noreferrer'><GitHubIcon/></a></li>
                    <li><a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'><LinkedInIcon/></a></li>
                </ul>
            </div>
            <div className="footer__extra-data">
                <ul>
                    <li>Legales</li>
                    <li>Política de devolución</li>
                    <li>Preguntas Frecuentes</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer