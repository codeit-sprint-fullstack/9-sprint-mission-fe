import { useState } from "react";
import { Heart } from "lucide-react";

function Card({ title, price }) {
  const [Image] = useState(true);

  return (
    <div>
      <img src={Image === true & {"#" : "#"}} alt="image" />
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <div><Heart /> 240</div>
      </div>
    </div>
  )
}

export default Card;