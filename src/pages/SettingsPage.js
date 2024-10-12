import './../styles/settingspage.css'


const SettingsPage = () => {
  return(
      <>
          <div className="left-menu">
              <img />
              <div>
                <div className="menu">
                    <ul id="sections">
                        <li>Користувач</li>
                        <li>
                            <span className="material-symbols-outlined">account_circle</span>
                            Особисті дані
                        </li>
                        <li><img/>Платіжна інформація</li>
                        <li>Навчання</li>
                        <li><img/>Рівень та прогрес</li>
                        <li><img/>Мій словник</li>
                        <li>Загальне</li>
                        <li><img/>Налаштування</li>
                    </ul>
                    <a >Видалити акаунт</a>
                </div>
              </div>
          </div>

          <div className="settings-window">

          </div>
      </>
  )
}

export default SettingsPage;