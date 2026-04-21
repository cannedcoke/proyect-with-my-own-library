/** @jsx cyanide */
import { cyanide } from "cyanide";
import { Button } from "../buttonComponent/Button";
import './input.css'
const Input = ({ placeholder, label, handleAdd }) => (
  <div id="inputContainer">
    <label htmlFor="input">{label}</label>
    <input id="input" type="text" placeholder={placeholder} />
    <Button text="agregar" onclick={handleAdd} />
  </div>
);

export { Input };
