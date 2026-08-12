import React,{useState,useContext } from "react";
import GeneralContext from "./GeneralContext";

// after material UI  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
import {Tooltip,Grow} from '@mui/material';
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';

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


const WatchlistItem = ({stock})=>{

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
          {showWatchlistActions && <Actions uid={stock.name}/> }
      </li>
    )
}

const Actions = ({uid})=>{

    const { openBuyWindow } = useContext(GeneralContext);

    return(
      <span className="actions">
        <span>

          <Tooltip title="Buy" placement="top" arrow="true" TransitionComponent={Grow}>
            <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button>
          </Tooltip>

          <Tooltip title="Sell" placement="top" arrow="true" TransitionComponent={Grow}>
            <button className="sell">Sell</button>
          </Tooltip>

          <button className="action"><BarChartOutlined className="icon"/></button>

          
          <Tooltip title="More" placement="top" arrow="true" TransitionComponent={Grow}>
            <button className="action"><MoreHoriz className="icon"/></button>
          </Tooltip>

        </span>
      </span>
    )
}