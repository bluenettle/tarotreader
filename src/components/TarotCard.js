import TarotImage from './TarotImage'; 
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
// store card data in json or array and images separate. Use random to draw a card from array or JSON that has pic id that pulls from separate database. To draw multiple cards you would rand() again and then just check if same rand().


export const TarotCard = ({ name, id, description }) => {
  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <CardBody>
        <TarotImage imageId={id} />
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
};


