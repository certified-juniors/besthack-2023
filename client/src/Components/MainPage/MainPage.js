import React, { useState } from "react";
import "./mainpage.css"

const MainPage = () => {

    const [rotation, setRotation] = useState(0);

    const handleMouseMove = (e) => {
        const centerX = e.target.offsetLeft + e.target.offsetWidth / 2;
        const maxRotation = 2;
        const maxCursorDistance = 200;
        const cursorDistance = Math.abs(e.pageX - centerX);

        // Calculate the rotation based on the cursor's position
        const rotation = (cursorDistance / maxCursorDistance) * maxRotation;

        setRotation(rotation);
    };


    return (
        <div className="mainPage" onMouseMove={handleMouseMove}>
            <div className="mainpgContent">
                <div className="marketingPhrase">
                    <p>Приветствуем вас в нашем брокерском начале! Мы поможем вам достичь ваших финансовых целей, предоставляя доступ к самым лучшим инструментам и технологиям для успешной торговли на финансовых рынках. С нами вы сможете управлять своим портфелем, получать самые последние новости и исследования, а также получать лучшие рекомендации для принятия обоснованных решений. Присоединяйтесь к нам сегодня и начните свой путь к финансовой свободе!</p>
                    <a href="/terminal"><button className="button">Начать работу</button></a>
                </div>
                <div className="davidStatue">
                    <img alt="Давид" src="../davidStatue.png" style={{ transform: `rotateY(${rotation}deg)` }} />
                </div>
            </div>
        </div>
    )
}

export default MainPage;
