import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./broker.css";

const Broker = ({ socket }) => {
    // const [addedBrokers, setAddedBrokers] = useState(() => {
    //     const storedBrokers = sessionStorage.getItem("addedBrokers");
    //     return storedBrokers ? JSON.parse(storedBrokers) : [];
    // });
    const [allBrokers, setAllBrokers] = useState([]);

    useEffect(() => {
        socket.on("brokerListUpdate", (response) => {
            console.log(response);
            setAllBrokers(response);
        });
    }, [socket]);

    // const addBroker = (index, name) => {
    //     const newAddedBrokers = [...addedBrokers, { index, name }];
    //     setAddedBrokers(newAddedBrokers);
    //     sessionStorage.setItem("addedBrokers", JSON.stringify(newAddedBrokers));
    // };

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
                {/* <div className="chooseBroker">
                    <h1>Подключение к брокеру</h1>
                    <div className="brokerList">
                        {allBrokers.map((info, index) => {
                            const isAdded = addedBrokers.some(
                                (broker) => broker.index === index
                            );
                            if (!isAdded) {
                                return (
                                    <div key={index} className="connectInfo">
                                        <p>{info}</p>
                                        <button onClick={() => addBroker(index, info.name)}>
                                            Добавить
                                        </button>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Broker;
