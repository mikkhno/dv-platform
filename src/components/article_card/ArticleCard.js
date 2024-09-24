// import './ArticleCard.css';
// import clock from './../../image/ico/pace.svg'
// import calendar from './../../image/ico/calendar.svg'
// import Tag from "./tag/Tag";
//
// const ArticleCard = ({article}) => {
//     return (
//         <>
//             <div className="flex-container" id="first-article">
//                 <div className="sa-pict" style={{backgroundSize: "cover", backgroundImage: `url(${article.image})`}}>
//                     {/*<img src={image}/>*/}
//                     <div className="article-topic">
//                         <p>{article.category}</p>
//                     </div>
//                 </div>
//                 <div id="ba-info">
//                     <img src={calendar}/>
//                     <p>{article.date}</p>
//                     <p>|</p>
//                     <img src={clock}/>
//                     <p>{article.readTime} хв.</p>
//                 </div>
//                 <h2 className="a-title">{article.title}</h2>
//                 <p className="a-desc">{article.description}</p>
//                 <div className="article-tags">
//                     {article.tags.map((tags) => {
//                         return <Tag tags={tags}/>
//                     })}
//
//                 </div>
//                 <a href="/article" className="read-action">Читати-></a>
//             </div>
//         </>
//     );
// }
//
// export default ArticleCard;
//
import './ArticleCard.css';
import defaultImage from '../../image/articles/telc_b2_brief.jpg';
import clock from './../../image/ico/pace.svg';
import calendar from './../../image/ico/calendar.svg';
import Tag from "./tag/Tag";

const ArticleCard = ({ article }) => {
    return (
        <>
            <div className="flex-container" id="first-article">
                {/*<div className="sa-pict" style={{*/}
                {/*    backgroundSize: "cover",*/}
                {/*    backgroundImage: `url(${article.image ? article.image : defaultImage})`*/}
                {/*}}>*/}
                    <div className="sa-pict" style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${defaultImage})`
                    }}>
                        <div className="article-topic">
                            {/*Треба зробити тут відображення всих категорій статті*/}
                            {/*{article.category.map((category) => (*/}
                            {/*   <p>{category}</p>*/}
                            {/*))}*/}
                            <p>{article.category ? article.category : "Andere"}</p>
                        </div>
                    </div>
                    <div id="ba-info">
                        <img src={calendar} alt="calendar"/>
                        <p>{article.date}</p>
                        <p>|</p>
                        <img src={clock} alt="clock"/>
                        <p>{article.readTime} хв.</p>
                    </div>
                    <h2 className="a-title">{article.title}</h2>
                    <p className="a-desc" dangerouslySetInnerHTML={{__html: article.description}}/>
                    <div className="article-tags">
                        {article.tags.map((tag, index) => (
                            <Tag key={index} tags={tag}/>
                        ))}
                    </div>
                    <a href="/article" className="read-action">Читати &#8594;</a>
                </div>
            </>
            );
            };

            export default ArticleCard;
