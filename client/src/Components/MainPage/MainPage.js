import React from "react";
import "./mainpage.css"

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="mainpgContent">
                <div className="marketingPhrase">
                    <p>Приветствуем вас в нашем брокерском начале! Мы поможем вам достичь ваших финансовых целей, предоставляя доступ к самым лучшим инструментам и технологиям для успешной торговли на финансовых рынках. С нами вы сможете управлять своим портфелем, получать самые последние новости и исследования, а также получать лучшие рекомендации для принятия обоснованных решений. Присоединяйтесь к нам сегодня и начните свой путь к финансовой свободе!</p>
                    <a href="/terminal"><button>Начать работу</button></a>
                </div>
                <div className="davidStatue">
                    <img alt="Давид" src="../davidStatue.png" />
                </div>
            </div>
        </div>
    )
}

export default MainPage;
