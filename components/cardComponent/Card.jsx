/** @jsx cyanide */
import { cyanide } from "cyanide";
import { Button } from "../buttonComponent/Button";
import './card.css'
const Card = ({ task, remove }) => (
  <div id="cardContainer">
    <h2>{task}</h2>
    <Button text="Done" onclick={remove} />
  </div>
);

export { Card };
