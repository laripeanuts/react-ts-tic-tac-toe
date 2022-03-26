import "./Item.css";

export const Item = () => {
  let playerX = true;
  const move = playerX ? "itemX" : "itemO";

  return (
    <div id={ move } className="item">
      x
    </div>
  );
};
