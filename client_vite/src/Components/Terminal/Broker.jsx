import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./broker.css";

const Broker = ({ socket }) => {
    const [allBrokers, setAllBrokers] = useState([]);

    useEffect(() => {
        socket.on("brokerListUpdate", (response) => {
            console.log(response);
            setAllBrokers(response);
        });
    }, [socket]);

    return (
        <div className="terminalPage">
            <div className="terminalpgContent">
                <div className="activeBrokers">
                    <h1>Брокеры</h1>
                    <div className="brokerName">
                        {allBrokers.map((broker, index) => (
                            <div key={index} className="brokerInfo">
                                <p>{broker}</p>
                                <Link
                                    to={`/terminal/connection/${broker}`}
                                    className="linkTo"
                                >
                                    <button onClick={() => console.log(`Connection to ${broker}`)}>
                                        Подключиться
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Broker;
