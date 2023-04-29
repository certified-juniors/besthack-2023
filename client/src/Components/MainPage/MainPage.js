import React from "react";
import "./mainpage.css"

import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

// neonCursor({
//   el: document.getElementById('app'),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025
// })

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="mainpgContent">
                {/* <div className="marketingPhrase">
                    <p>Приветствуем вас в нашем брокерском начале! Мы поможем вам достичь ваших финансовых целей, предоставляя доступ к самым лучшим инструментам и технологиям для успешной торговли на финансовых рынках. С нами вы сможете управлять своим портфелем, получать самые последние новости и исследования, а также получать лучшие рекомендации для принятия обоснованных решений. Присоединяйтесь к нам сегодня и начните свой путь к финансовой свободе!</p>
                    <a href="/terminal"><button>Начать работу</button></a>
                </div>
                <div className="davidStatue">
                    <img alt="Давид" src="../davidStatue.png" />
                </div> */}
                <div id="app">
                    <div id="hero">
                        <h1>NEON<br />CURSOR</h1>
                        <a target="_blank" href="https://github.com/klevron/threejs-toys">github/threejs-toys</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainPage;
