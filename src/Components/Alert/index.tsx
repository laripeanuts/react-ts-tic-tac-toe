import { ItemValue } from "../../Types";
import "./Alert.css"

type AlertProps = {
  message?: string,
  win: () => boolean,
  draw: boolean,
  player: ItemValue,
}

export const Alert = ({ message, win, draw, player }: AlertProps) => {
  message = "Bom Jogo!";
  let alertStyle = "alert animate__animated animate__pulse";
  
  if (win() === true) {
    message = `Player ${player} ganhou!`;
    alertStyle = "alert animate__animated animate__shakeX"; 
  } else if (draw === true) {
    message = `Oops... Empatou!`;
    alertStyle = "alert animate__animated animate__shakeX";
  };

  return (
    <div id="alert" className={alertStyle}>
      {message}
    </div>
  );
};