import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./broker.css";

const Broker = ({ broker }) => {
    const [addedBrokers, setAddedBrokers] = useState(() => {
        const storedBrokers = sessionStorage.getItem("addedBrokers");
        return storedBrokers ? JSON.parse(storedBrokers) : [];
    });

    const addBroker = (index, name) => {
        const newAddedBrokers = [...addedBrokers, { index, name }];
        setAddedBrokers(newAddedBrokers);
        sessionStorage.setItem("addedBrokers", JSON.stringify(newAddedBrokers));
    };

    return (
        <div className="terminalPage">
            <div className="terminalpgContent">
                <div className="activeBrokers">
                    <h1>Брокеры</h1>
                    <div className="brokerName">
                        {addedBrokers.map((broker, index) => (
                            <div key={index} className="brokerInfo">
                                <p>{broker.name}</p>
                                <Link to={`/terminal/connection/${broker.name}`} className="linkTo">
                                    <button onClick={() => console.log(`Connection to ${broker.name}`)}>
                                        Подключиться
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chooseBroker">
                    <h1>Подключение к брокеру</h1>
                    <div className="brokerList">
                        {broker.map((info, index) => {
                            const isAdded = addedBrokers.some((broker) => broker.index === index);
                            if (!isAdded) {
                                return (
                                    <div key={index} className="connectInfo">
                                        <p>{info.name}</p>
                                        <button onClick={() => addBroker(index, info.name)}>Добавить</button>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Broker;
