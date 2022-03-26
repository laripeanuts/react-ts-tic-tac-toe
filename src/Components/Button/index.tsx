import "./Button.css";

type ButtonProps = {
  children: React.ReactNode,
  image: string,
  onClick: () => void,
  active: boolean,
}

export const ButtonPrimary = ({ image, children, onClick, active }: ButtonProps) => (
  <button
    className="button"
    id="btnPrimary"
    onClick={onClick}
    disabled={!active}
  >
    <img src={image} alt="reload" width="30px" className="filter-pink"></img>
    {children}
  </button>
);
