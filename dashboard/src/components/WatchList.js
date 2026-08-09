import React,{useState} from "react";

// after material UI  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
import {Tooltip,Grow} from '@mui/material';
import {KeyboardArrowDown,KeyboardArrowUp} from '@mui/icons-material';

import {watchlist} from '../data/data.js';



const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">

          {watchlist.map( (stock,index)=>{
            return(
              <WatchlistItem stock={stock} key={index} />
            )})}

      </ul>

    </div>
  );
};

export default WatchList;


const WatchlistItem = ({stock,key})=>{

    const[showWatchlistActions,setShowWatchlistActions]=useState(false);

    const handleMouseEnter = (e)=>{
        setShowWatchlistActions(true);
    }

    const handleMouseExit = (e)=>{
        setShowWatchlistActions(false);
    }
    
    return(
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
          <div className="item">
              <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
              <div className="itemInfo">
                <span className="percent">{stock.percent}</span>
                {stock.isDown ? ( <KeyboardArrowDown className="down"/> ) : ( <KeyboardArrowUp className="up"/> )}
                <span className="percent">{stock.price}</span>
              </div>
          </div>
      </li>
    )
}