import React from 'react';
import { Card } from 'antd';
import Product from './Product'

const { Meta } = Card;


interface ProductCardProps {
  productModel: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ productModel }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={productModel.name} src={productModel.imageUrl} />}
  >
    <Meta title={productModel.name} description={productModel.description} />
    <div>
      <p>Price: {productModel.price}</p>
      <p>Quantity: {productModel  .quantity}</p>
    </div>
  </Card>
);

export default ProductCard;
