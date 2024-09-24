import React from 'react';
import calender from "../../image/ico/calendar.svg";
import timer from "../../image/ico/pace.svg";
import beginnerIcon from "../../image/ico/flower.svg";
import intermediateIcon from "../../image/ico/sprinter.svg";
import {actualArticles} from "../../helpers/actualArticles";
import Tag from "../article_card/tag/Tag";
import defaultImage from "../../image/articles/telc_b2_brief.jpg";

const Feed = () => {
  return(
      <>
        <div className="big-article">
          <div className="ba-pict" style={{ backgroundSize: "cover", backgroundImage: `url(${actualArticles.image ? actualArticles.image : defaultImage})`}}>
            <div className="ba-topic">
              <p>{actualArticles[0].category}</p>
            </div>
          </div>
          <div id="ba-info">
            <img src={calender}/>
            <p>{actualArticles[0].date}</p>
            <p>|</p>
            <img src={timer}/>
            <p>{actualArticles[0].readTime} хв. для читання</p>
          </div>
          <h2 id="ba-title">{actualArticles[0].title}</h2>
          <p id="ba-desc" dangerouslySetInnerHTML={{ __html: actualArticles[0].description }} />
          <div className="article-tags">
          {actualArticles[0].tags.map((tag, index) => (
              <Tag key={index} tags={tag} /> ))}
          </div>
          <a href="/article" className="read-action">Читати &#8594;</a>

        </div>

        <div className="small-articles">
          <div className="first-article">
            <div className="sa-pict">
              <div className="article-topic">
                <p>{actualArticles[1].category}</p>
              </div>
            </div>
            <h2 className="a-title">{actualArticles[1].title}</h2>
            <p className="a-desc" dangerouslySetInnerHTML={{ __html: actualArticles[1].description }} />
            <a href="" className="read-action">Читати &#8594;</a>

          </div>

          <div className="second-article">
             <div className="sa-pict">
              <div className="article-topic">
                <p>{actualArticles[2].category}</p>
              </div>
            </div>
            <h2 className="a-title">{actualArticles[2].title}</h2>
            <p className="a-desc" dangerouslySetInnerHTML={{ __html: actualArticles[2].description }} />
            <a href="" className="read-action">Читати &#8594;</a>
        </div>
        </div>
      </>
  )
}

export default Feed;


// робочий
// const Feed = ({actualArticles}) => {
//   return(
//       <>
//         <div className="big-article">
//           <div className="ba-pict">
//             <div className="ba-topic">
//               <p>Grammatik</p>
//             </div>
//           </div>
//           <div id="ba-info">
//             <img src={calender}/>
//             <p>Квітень 26, 2023</p>
//             <p>|</p>
//             <img src={timer}/>
//             <p>15 хв. для читання</p>
//           </div>
//           <h2 id="ba-title">Використання Vorganspassiv<br/>
//             в німецькій мові</h2>
//           <p id="ba-desc">Пасивні речення – це речення, де не вказана особа, яка виконує дію. Посуд
//             миється.
//             Робота робиться. Німецька вчиться. І в німецькій мові такі речення вживаються значно
//             частіше,
//             ніж в
//             українській. Також ця граматика є обов’язковою від рівня А2...</p>
//           <div className="article-tags">
//
//             <div className="category" id="pruefung">
//               <img src={beginnerIcon}/>
//               <p>A2</p>
//             </div>
//
//             <div className="category" id="pruefung">
//               <img src={intermediateIcon}/>
//               <p>B1</p>
//             </div>
//
//           </div>
//           <a href="" className="read-action">Читати-></a>
//
//         </div>
//
//         <div className="small-articles">
//           <div className="first-article">
//             <div className="sa-pict">
//               <div className="article-topic">
//                 <p>Prüfung</p>
//               </div>
//             </div>
//             <h2 className="a-title">Фрази для написання листів</h2>
//             <p className="a-desc">Пишемо листи німецькою для іспиту DTZ. Цей іспит охоплює декілька
//               типів
//               листів:
//               лист для подачі документів на роботу, щодо оренди квартири..</p>
//             <a href="" className="read-action">Читати-></a>
//
//           </div>
//
//           <div className="second-article">
//             <div className="sa-pict">
//               <div className="article-topic">
//                 <p>Prüfung</p>
//               </div>
//             </div>
//             <h2 className="a-title">Фрази для написання листів</h2>
//             <p className="a-desc">Пишемо листи німецькою для іспиту DTZ. Цей іспит охоплює декілька
//               типів
//               листів:
//               лист для подачі документів на роботу, щодо оренди квартири..</p>
//             <a href="" className="read-action">Читати-></a>
//           </div>
//         </div>
//       </>
//   )
// }