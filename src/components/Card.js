// store card data in json or array and images separate. Use random to draw a card from array or JSON that has pic id that pulls from separate database. To draw multiple cards you would rand() again and then just check if same rand().


export const Card = (name, imageID, description) => {
  return (
    <>
    <h3>{name}</h3>
    <CardImage imageID= {imageID} />
    <p className="description">{description}</p>
    </>
  )
};


