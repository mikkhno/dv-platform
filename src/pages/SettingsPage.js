import './../styles/settingspage.css'
import logo from '../image/logo.png'


const SettingsPage = () => {
    return (
        <>
            <div className="left-menu">
                <img src={logo}/>
                <div>
                    <div className="menu">
                        <ul id="sections">
                            <li><span className="title">Користувач</span></li>
                                    <li>
                                        <span className="material-symbols-outlined">account_circle</span>
                                        Особисті дані
                                    </li>
                                    <li><span className="material-symbols-outlined">wallet</span>Платіжна інформація
                                    </li>

                            <li><span className="title">Навчання</span></li>
                            <li><span className="material-symbols-outlined">emoji_events</span>Рівень та прогрес
                            </li>
                            <li><span className="material-symbols-outlined">dictionary</span>Мій словник
                            </li>

                            <li><span className="title">Загальне</span></li>
                            <li><span className="material-symbols-outlined">settings</span>Налаштування
                            </li>
                        </ul>
                        <a href="#" id="delete-account">Видалити акаунт</a>
                    </div>
                </div>
            </div>

            <div className="settings-window">

            </div>
        </>
    )
}

export default SettingsPage;