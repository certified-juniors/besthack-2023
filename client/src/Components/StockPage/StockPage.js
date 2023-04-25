import react, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Stock from "./Stock/Stock"
import Navbar from "../NavBar/NavBar"
import Chart from "./Chart/Chart"
import ServiceList from "./ServiceList/ServiceList"

import "./StockPage.css";

const StockPage = () => {
    const [stocks, setstock] = useState([
        {
    
    
          name: 'Apple',
          price: 100,
        },
        {
          name: 'Intel',
          price: 3300,
        },
        {
          name: 'Amd',
          price: 12100,
        },
        {
          name: 'First Solar',
          price: 10120,
        },
        {
          name: 'Microstrategy',
          price: 10,
        },
        {
          name: 'Tesla',
          price: 1100,
        }
      ])
      return (
        <div className="stock-page-container">
            <Navbar/>
            <div className="servicelist-searchbar">
                <ServiceList/>
                <SearchBar/>
            </div>
            <div className="stock-graph">
                <div className="stocks-container">
                    {stocks.map((stock, index) => (
                        <Stock key={index} stock={stock} />
                    ))} 
                </div>
                <div className="chart-container">
                    <Chart />
                </div>
            </div>
            
        </div>
    )
}

export default StockPage;
