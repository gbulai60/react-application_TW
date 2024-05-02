import React from 'react';
import { Card } from 'antd';
import Product from '../models/Product';

const { Meta } = Card;


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={product.name} src={product.imageUrl} />}
  >
    <Meta title={product.name} description={product.description} />
    <div>
      <p>Model: {product.model}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.quantity}</p>
    
    </div>
  </Card>
);

export default ProductCard;
