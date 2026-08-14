import React,{useState,useContext } from "react";
import GeneralContext from "./GeneralContext";

// after material UI  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
import {Tooltip,Grow} from '@mui/material';
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';

import {watchlist} from '../data/data.js';

import { DoughnutChart } from "./DoughnutChart.js";



const WatchList = () => {

  // export const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  // datasets: [
  //   {
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
//       ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

  const labels = watchlist.map((subArray)=>subArray['name']);

  const data = {
    labels,
    datasets: [
      {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
  }
]
  }


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
      
      <DoughnutChart data={data}/>

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