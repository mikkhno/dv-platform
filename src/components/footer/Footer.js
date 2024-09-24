import './footer.css'
import logo from './../../image/site-logo.svg'
import telegramIcon from './../../image/ico/telegram.svg'
import youtubeIcon from './../../image/ico/youtube.svg'
import instagramIcon from './../../image/ico/instagram.svg'
const Footer = ()=>
{
    return (<footer>
        <div className="content">
            <div className="first-column">
            <img id="logo" alt="logo" src={logo}/>
            <p>Deutsch Vektor 2024<br/>
                © Усі права захищені</p>
            <div className="social-media">
            <img src={telegramIcon}/>
            <img src={youtubeIcon}/>
            <img src={instagramIcon}/>
                </div>
            </div>

            <div className="second-column">
                <ul>
                    <li>Головна</li>
                    <li>Блог</li>
                    <li>Курси</li>
                    <li>Мій профіль</li>
                </ul>
            </div>

            <div className="third-column">
                <a href={""}>Договір оферти</a>
                <a href={""}>Політика конфіденційності</a>

            </div>

        </div>
    </footer>)
}

export default Footer;