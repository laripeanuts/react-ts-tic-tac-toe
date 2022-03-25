import { ItemX}  from "../Items/ItemX"
import { ItemO } from "../Items/ItemO"

import "./Table.css";

export const Table = () => (
  <div className="ticTacToe">
    <div className="column">
      <span className="square" data-col="0" data-row="0"><ItemX /></span>
      <span className="square" data-col="0" data-row="1"></span>
      <span className="square" data-col="0" data-row="2"></span>
    </div>
    <div className="column">
      <span className="square" data-col="1" data-row="0"></span>
      <span className="square" data-col="1" data-row="1"></span>
      <span className="square" data-col="1" data-row="2"></span>
    </div>
    <div className="column">
      <span className="square" data-col="2" data-row="0"></span>
      <span className="square" data-col="2" data-row="1"></span>
      <span className="square" data-col="2" data-row="2"></span>
    </div>
  </div>
);