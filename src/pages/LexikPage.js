import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useState} from "react";
import React from "react";
import '../styles/lexikpage.css'
import { WordTopicInfo, wordEntityList, otherInfo } from '../helpers/elearning/jsonLexikPage.js'
import YoutubePlugin from "../components/elearning/YoutubePlugin";
import ModeSection from "../components/elearning/buttons/ModeSection";
import WordTable from "../components/elearning/WordTable";
import TopicBlock from "../components/elearning/TopicBlock";
import nextModulePict from "../image/svg/wohnen.svg"
import ProgressButton from "../components/elearning/buttons/ProgressButton";
import CircularProgress from "../components/elearning/buttons/ProgressButton";
import CircularProgressSVG from "../components/elearning/buttons/ProgressButton";
import vektorTip from "../image/vektor/vektorTip.png"
import {jsonNextModule} from "../helpers/elearning/jsonNextModule";

const LexikPage = () => {

     const topicInfo = WordTopicInfo[0];
     const wordList = wordEntityList;
     const OtherInfo = otherInfo[0];
     const NextModules = {jsonNextModule};

    return (
        <>
            <style>
                {`
                .App {background-color: #f5f5f5;}
        .material-symbols-outlined {
            color: #0B2545;
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    `}
            </style>
            <Header/>
            <div className="page-content">
                <div className="title-modus">
                    <TopicBlock topicInfo={topicInfo}></TopicBlock>

                    <ModeSection/>

                    <h2 className="next-topics-t">Наступні модулі</h2>

                    <div className="next-topics">
                        {jsonNextModule.map(module => (
                            <div className="topic-1" key={module.id}>
                                <img className="next-topic-pict" src={module.imagePath} alt={module.themeTitle}/>
                                <div className="next-topic-text">
                                    <div className="level-container">
                                        <h3>{module.subLevel}</h3>
                                    </div>
                                    <h2>{module.themeTitle}</h2>
                                </div>
                                <CircularProgressSVG progress={module.progress}/>
                            </div>
                        ))}
                    </div>

                    {OtherInfo.video?.trim() && (<div className="vektor-tip">
                        <img src={vektorTip}/>
                        <div className="vektor-tip-text">
                            <h2>Порада від Вектора</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>)}


                </div>


                <div className="vocab" style={{height: OtherInfo.video ? '760px' : '554px'}}>

                    {OtherInfo.video?.trim() && (
                        <>
                            <h2>Відеоматеріал</h2>
                            <YoutubePlugin videoId={OtherInfo.video}/>
                        </>
                    )}

                    <WordTable wordsData={wordList}/>

                </div>
            </div>
            <Footer/>

        </>
    );
}

export default LexikPage;