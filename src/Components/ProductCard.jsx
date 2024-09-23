import React from 'react';
import { Card } from 'react-bootstrap';
import CustomButton from './Button'; 

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card style={{ width: '100%' }} className="mb-4">
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.title} 
        style={{ height: '150px', objectFit: 'contain', padding: '10px' }} 
      />
      <Card.Body>
        <Card.Title className="text-truncate">{product.title}</Card.Title>
        <Card.Text>{product.description.slice(0, 100)}...</Card.Text>
        <Card.Text><strong>Price: ${product.price}</strong></Card.Text>
        <CustomButton text="Add to Cart" onClick={() => onAddToCart(product)} />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
