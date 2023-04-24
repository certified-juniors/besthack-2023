import React, {useState} from "react";
import "./ServiceList.css"

const ServiceList = () => {
  const [selectedService, setSelectedService] = useState('');

  const handleSelect = (event) => {
    setSelectedService(event.target.value);
    handleSubmit(event);
  };

  const handleSubmit = (event) => {
    // обработка выбранного элемента
    console.log("Выбранный элемент:", event.target.value);
  } 

  return (
    <form>
      <h3>Choose a Service:</h3>
      <select value={selectedService} onChange={handleSelect} className = "select">
        <option value="">Select a service</option>
        <option value="binance">binance</option>
        <option value="Coinbase Exchange">Coinbase Exchange</option>
        <option value="kraken">kraken</option>
      </select>
      <h4>You selected: {selectedService}</h4>
    </form>
  );
};

export default ServiceList;
