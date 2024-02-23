import React from "react";
import { selectCardImageById } from "../redux/cardsSlice";
import { useSelector } from "react-redux";

const TarotImage = ({ imageId}) => {
    const card = useSelector(selectCardImageById(imageId));
    console.log(card);
    console.log(card.image);
    return <img src={card.image} alt={card.name} />
}

//there is a bug with the image not rendering. Console.log(card.image) returns an object for some reason. I will work on this at a later time. 

export default TarotImage;