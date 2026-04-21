/** @jsx cyanide */
import { cyanide } from "cyanide";
import "./button.css"
const Button = ({ text, onclick }) => (
    <button onClick={onclick} >{text}</button>
);

export { Button };
