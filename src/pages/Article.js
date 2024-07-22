import deployed_codeIcon from "../image/ico/deployed_code.svg";
import caseIcon from "../image/ico/case.svg";
import bIcon from "../image/ico/b.svg";
import './../styles/article.css'
// import telegramIcon from './../image/ico/telegram_logo.svg'
import xIcon from './../image/ico/X_logo.svg'
import facebookIcon from './../image/ico/facebook_logo.svg'
import React from "react";

const Article = () => {
return (
    <>
        <header></header>
        <div className="article-name">
            <h1>Використання Vorgangspassiv в німецькій мові</h1>
            <h3>Опубліковано Квітень 26, 2023 |
                15 хв. для опрацювання</h3>
            <div className="tags">
                <div className="category" id="grammatik">
                    <img src={deployed_codeIcon}/>
                    <p>Grammatik</p>
                </div>

                <div className="category" id="lexik">
                    <img src={bIcon}/>
                    <p>Lexik</p>
                </div>

                <div className="category" id="arbeit">
                    <img src={caseIcon}/>
                    <p>Arbeit</p>
                </div>
            </div>
        </div>

        <div className="article-image"></div>
        <div className="content-and-menu">
            <div className="left-side">
                <div className="article-content">
                    <div className="first-section">
                        <h2 id="1sect">Вступне слово</h2>
                        <p>Пасивні речення – це речення, де не вказана особа, яка виконує дію. Посуд миється. Робота
                            робиться. Німецька вчиться. І в німецькій мові такі речення вживаються значно частіше, ніж в
                            українській. Також ця граматика є обов’язковою від рівня А2.

                            <br/><br/> В німецькій мові є два різних пасивних стани:
                            <br/> Vorgangspassiv(пассів процесу) і Zustandspassiv(пассів стану).

                            <br/>Порівняйте:
                        </p>
                        <table id="table-1">
                            <thead>
                            <tr>
                                <th>Vorgangspassiv</th>
                                <th>Zustandspassiv</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Die Wäsche wird gewaschen.
                                    <br/><span>Білизна переться(процес)</span>
                                </td>
                                <td>Die Wäsche ist gewaschen.
                                    <br/><span>Білизна випрана(стан)</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="second-section">
                        <h2 id="2sect">Вживання Vorgangspassiv</h2>
                        <p>
                            Vorgangspassiv використовується для вираження того, що дія вже відбулася, або той, хто
                            виконав
                            дію, не вказується, або знаходиться в тіні. Вона використовується тоді, коли дійсно важливим
                            є
                            сам факт події, а не той, хто її виконав.
                            <br/><br/>Для утворення Vorgangspassiv використовується дієслово "werden" у відповідній
                            формі
                            (залежно від особи та числа) і повний дієприкметник минулого часу (Partizip II) головного
                            дієслова. Ось приклад:
                        </p>
                        <table id="table-2">
                            <thead>
                            <tr>
                                <th>Оригінальне речення</th>
                                <th>Vorgangspassiv</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Der Lehrer erklärt die Regel.
                                    <br/><span>Вчитель пояснює правило</span>
                                </td>
                                <td>Die Regel wird vom Lehrer erklärt.
                                    <br/><span>Правило пояснюється вчителем</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="third-section">
                        <h2 id="3sect">Часові форми</h2>
                        <p>Vorgangspassiv використовується значно частіше і саме його вивчають на рівні А2. Passiv має
                            всі
                            часові форми, що і активний час, тобто Futur I und II, Präsens, Präteritum,
                            Perfekt und Plusquamperfekt:</p>
                        <table id="table-3">
                            <thead>
                            <tr>
                                <th>Чаc</th>
                                <th>Форма</th>
                                <th>Приклад</th>
                                <th>Переклад</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Präsens</td>
                                <td>werden … Part II</td>
                                <td>Das Haus wird gebaut.</td>
                                <td>Будинок будується</td>
                            </tr>
                            <tr>
                                <td>Präteritum</td>
                                <td>wurde … Part II</td>
                                <td>Das Haus wurde gebaut.</td>
                                <td>Будинок будувався</td>
                            </tr>
                            <tr>
                                <td>Perfekt</td>
                                <td>ist … Part II worden</td>
                                <td>Das Haus ist gebaut worden.</td>
                                <td>Будинок будувався (часто вказує на завершену дію, офіційний стиль)</td>
                            </tr>
                            <tr>
                                <td>Plusquamperfekt</td>
                                <td>war … Part II worden</td>
                                <td>Das Haus war gebaut worden.</td>
                                <td>Будинок будувався (вживаємо, коли є дві дії в минулому і ця була раніше)</td>
                            </tr>
                            </tbody>
                        </table>
                        <p>Відразу звертаємо увагу на те, що в реченнях немає діючої особи, байдуже, хто будував
                            будинок.
                            Підметом виступає щось, над чим виконується дія. В нашому прикладі будинок.</p>
                    </div>
                    <div className="fourth-section">
                        <h2 id="4sect">Діюча особа</h2>
                        <p>Якщо ми хочемо ввести в речення діючу особу, то тут є наступні нюанси:</p>
                    </div>
                    <table id="table-4">
                        <thead>
                        <tr>
                            <th>Конструкція</th>
                            <th>Вживання</th>
                            <th>Приклад</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>von + Dativ</td>
                            <td>дію виконують люди, організації чи установи і погодні явища</td>
                            <td>Die Regel wird vom Lehrer erklärt.
                                <br/><span>Правило пояснюється вчителем.</span>
                            </td>
                        </tr>
                        <tr>
                            <td>durch + Akkusativ</td>
                            <td>дію виконують неживі істоти</td>
                            <td>Das Kind wurde durch Lärm geweckt.
                                <br/><span>Дитину розбудув шум.</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p>Є ще ряд правил і нюансів з цієї граматики, але краще опрацьовувати все дозовано. Відкрийте
                        будь-яку
                        статтю німецькою і знайдіть декілька речень в Passiv або передивіться наші приклади:<br/></p>
                    <ul className="sentence-examples">
                        <li>Die Hausaufgaben wurden gestern von den Schülern gemacht.
                            <br/><span>Домашні завдання були зроблені учнями вчора.</span>
                        </li>

                        <li>Die Straße wird nächste Woche von der Stadt renoviert.
                            <br/><span>Дорога буде відремонтована містом наступного тижня.</span>
                        </li>

                        <li>
                            Die Präsentation wurde heute von mir vorbereitet.
                            <br/><span>Презентація була підготовлена мною сьогодні.</span>
                        </li>

                        <li>
                            Die neuen Regelungen werden bald von der Regierung bekannt gegeben.
                            <br/><span>Нові регуляції будуть скоро оголошені урядом.</span>
                        </li>

                        <li>
                            Das Konzert wurde gestern von der Band aufgeführt.
                            <br/><span>Концерт був виконаний групою вчора.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-side">
                <div className="agenda">
                    <ul>
                        <li><a href="#1sect" id="intro">Вступ</a></li>
                        <li><a href="#2sect" id="using">Вживання</a></li>
                        <li><a href="#3sect" id="time-forms">Часові форми</a></li>
                        <li><a href="#4sect" id="osoba">Діюча особа</a></li>
                    </ul>
                </div>
                <h2>Вправи до теми</h2>
                <div className="topic-exercises">
                    <a href="#">
                        <div id="exercises-1">
                            <h3>Тест 1</h3>
                            {/*<img src="image/ico/case.svg" className="orange_ico"/>*/}
                        </div>
                    </a>
                    <a href="#">
                        <div id="exercises-2">
                            <h3>Тест 2</h3>
                            {/*<img src="image/ico/case.svg" className="orange_ico"/>*/}
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="share">
            <h2>Поділіться цією цікавою статтею з друзями,
                <br/>щоб разом відкривати нові знання!
            </h2>
            <div className="social-media">
                <div className="share-button" id="x"><img src={xIcon}/></div>
                <div className="share-button" id="facebook"><img src={facebookIcon}/></div>
                {/*<div className="share-button" id="telegram"><img src={telegramIcon}/></div>*/}
            </div>
        </div>

        <div className="relevant-articles">

            <h2>Статті за теґами</h2>
            {/*<img id="orange-line" src="./image/LINE.png"/>*/}
            <div className="rel-art-list">
                <div className="rel-art" id="1">
                    <div className="ra-pict" id="1"></div>
                    <h2>Фрази для написання листів</h2>
                </div>

                <div className="rel-art" id="2">
                    <div className="ra-pict" id="2"></div>
                    <h2>Фрази для написання листів</h2>
                </div>

                <div className="rel-art" id="3">
                    <div className="ra-pict" id="3"></div>
                    <h2>Фрази для написання листів</h2>
                </div>
            </div>
        </div>
        <footer></footer>
    </>
);
}


export default Article;