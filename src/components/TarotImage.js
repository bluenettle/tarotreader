import React from "react";
import { selectCardImageById } from "../redux/cardsSlice";
import { useSelector } from "react-redux";

const TarotImage = ({ imageId}) => {
    const card = useSelector(selectCardImageById(imageId));
    console.log(card);
    console.log(card.image);
    return <img src={card.image} alt={card.name} width='50%' style={{ marginLeft: '25%', marginRight: '25%'}} />
}


export default TarotImage;