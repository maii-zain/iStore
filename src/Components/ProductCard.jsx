import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../Styles/ProductCard.css'; 

const ProductCard = ({ product }) => {
  const [readMore, setReadMore] = useState(false);


  const descriptionPreview = product.description.slice(0, 100);

  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <Card className="product-card">
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.title} 
        className="product-card-img" 
      />
      <Card.Body>
        <Card.Title className="product-card-title">{product.title}</Card.Title>
        <Card.Text className="product-card-text">
          {readMore ? product.description : descriptionPreview}
          {product.description.length > 100 && (
            <Button 
              variant="link" 
              onClick={toggleReadMore} 
              className="product-card-readmore-btn"
            >
              {readMore ? ' Read Less' : '...Read More'}
            </Button>
          )}
        </Card.Text>
        <Card.Text className="product-card-price">
          Price: ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
