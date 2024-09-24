import './header.css'
import logo from './../../image/site-logo.svg'

const Header = ()=>
{
    return (<header>
        <div className="left-part">
        <img alt="logo" id="logo" src={logo}/>
        <ul className="Nav">
            <li><a href={''}>Курси</a></li>
            <li><a href={''}>Навчання</a></li>
            <li><a href={''}>Блог</a></li>
        </ul>
        </div>
        <button id="login">Увійти</button>
    </header>)
}

export default Header;