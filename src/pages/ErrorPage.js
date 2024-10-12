import '../styles/errorpage.css'
import Header from "../components/header/Header";
import err_vektor from '../image/404.png'
import Footer from "../components/footer/Footer";
import Animation404 from "../animations/Animation404";


const ErrorPage = () => {

    return(
        <>
            <Header />
            <div className="container">
            <Animation404 />
                <div className="rightText">
            <h1>Йой! Сторінка не знайдена...</h1>
            <h3>Ймовірно, сторінки не існує або вона була видалена.</h3>
            <button>На головну</button>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;